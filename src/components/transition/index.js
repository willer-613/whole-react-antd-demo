/*
 * @Author: your name
 * @Date: 2020-02-28 14:02:18
 * @LastEditTime: 2020-02-28 14:02:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\components\transition\index.js
 */
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ReactDOM from "react-dom";

const propTypes = {
  /** 执行动画 */
  action: PropTypes.bool,
  /** 切换的css动画的class名称 */
  toggleClass: PropTypes.string,
  /** 进入动画的class名称，存在 toggleClass 时无效 */
  enterClass: PropTypes.string,
  /** 离开动画的class名称，存在 toggleClass 时无效 */
  leaveClass: PropTypes.string,
  /** 动画延迟执行时间 */
  delay: PropTypes.string,
  /** 动画执行时间长度 */
  duration: PropTypes.string,
  /** 动画执行次数，只在执行 CSS3 动画时有效 */
  count: PropTypes.number,
  /** 动画缓动函数 */
  easing: PropTypes.oneOf([
    "linear",
    "ease",
    "ease-in",
    "ease-out",
    "ease-in-out"
  ]),
  /** 是否强制轮流反向播放动画，count 为 1 时无效 */
  reverse: PropTypes.bool,
  /** 动画结束的回调 */
  onEnd: PropTypes.func,
  /** 离开动画结束时卸载元素 */
  exist: PropTypes.bool
};

const defaultProps = {
  action: false,
  count: 1,
  reverse: false,
  exist: false
};

/**
 * 浏览器兼容事件检测函数
 *
 * @param {node} el - 触发事件的 DOM 元素
 * @param {array} events - 可能的事件类型
 * @returns {*}
 */
const whichEvent = (el, events) => {
  const len = events.length;
  for (var i = 0; i < len; i++) {
    if (el.style[i]) {
      return events[i];
    }
  }
};

/**
 * css过渡动画组件
 *
 * @visibleName Transition 过渡动画
 */
class Transition extends React.Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  onEnd = e => {
    const { onEnd, action, exist } = this.props;
    if (onEnd) {
      onEnd(e);
    }
    // 卸载 DOM 元素
    if (!action && exist) {
      const node = e.target.parentNode;
      node.parentNode.removeChild(node);
    }
  };

  /**
   * 对动画结束事件 onEnd 回调的处理函数
   *
   * @param {string} type - 事件解绑定类型: add - 绑定事件，remove - 移除事件绑定
   */
  handleEndListener(type = "add") {
    const el = ReactDOM.findDOMNode(this).querySelector(".transition-wrapper");
    const events = ["AnimationEnd", "TransitionEnd"];
    events.forEach(ev => {
      const eventType = whichEvent(el, [ev.toLowerCase(), `webkit${ev}`]);
      el[`${type}EventListener`](eventType, this.onEnd, false);
    });
  }

  componentDidMount() {
    this.handleEndListener();
  }

  componentWillUnmount() {
    const { action, exist } = this.props;
    if (!action && exist) {
      this.handleEndListener("remove");
    }
  }

  render() {
    const {
      className,
      action,
      toggleClass,
      enterClass,
      leaveClass,
      delay,
      duration,
      count,
      easing,
      reverse,
      children
    } = this.props;

    // 动画样式
    const styleText = (() => {
      let style = {};
      // 设置延迟时长
      if (delay) {
        style.transitionDelay = delay;
        style.animationDelay = delay;
      }
      // 设置播放时长
      if (duration) {
        style.transitionDuration = duration;
        style.animationDuration = duration;
      }
      // 设置播放次数
      if (count) {
        style.animationIterationCount = count;
      }
      // 设置缓动函数
      if (easing) {
        style.transitionTimingFunction = easing;
        style.animationTimingFunction = easing;
      }
      // 设置动画方向
      if (reverse) {
        style.animationDirection = "alternate";
      }
      return style;
    })();

    const transition = (
      <div
        className={classnames({
          transition: true
        })}
        style={{
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          className={classnames({
            "transition-wrapper": true,
            [className]: className,
            [toggleClass]: action && toggleClass,
            [enterClass]: !toggleClass && action && enterClass,
            [leaveClass]: !toggleClass && !action && leaveClass
          })}
          style={styleText}
        >
          {children}
        </div>
      </div>
    );

    return transition;
  }
}

export default Transition;
