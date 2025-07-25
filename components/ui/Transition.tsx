'use client';
import React, { useRef, ReactNode, ElementType } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';

interface TransitionProps {
  show: boolean;
  enter?: string;
  enterStart?: string;
  enterEnd?: string;
  leave?: string;
  leaveStart?: string;
  leaveEnd?: string;
  appear?: boolean;
  unmountOnExit?: boolean;
  tag?: ElementType;
  children: ReactNode;
  [key: string]: unknown;
}

const Transition: React.FC<TransitionProps> = ({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
  leave = '',
  leaveStart = '',
  leaveEnd = '',
  appear,
  unmountOnExit,
  tag = 'div',
  children,
  ...rest
}: TransitionProps) => {
  const enterClasses = enter.split(' ').filter((s) => s.length);
  const enterStartClasses = enterStart.split(' ').filter((s) => s.length);
  const enterEndClasses = enterEnd.split(' ').filter((s) => s.length);
  const leaveClasses = leave.split(' ').filter((s) => s.length);
  const leaveStartClasses = leaveStart.split(' ').filter((s) => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter((s) => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node: HTMLElement, classes: string[]) {
    if (classes.length) {
      node.classList.add(...classes);
    }
  }

  function removeClasses(node: HTMLElement, classes: string[]) {
    if (classes.length) {
      node.classList.remove(...classes);
    }
  }

  const nodeRef = useRef<HTMLElement>(null);
  const Component = tag;

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done: () => void) => {
        if (nodeRef.current) {
          nodeRef.current.addEventListener('transitionend', done, false);
        }
      }}
      onEnter={() => {
        if (!removeFromDom && nodeRef.current) {
          nodeRef.current.style.display = '';
        }
        if (nodeRef.current) {
          addClasses(nodeRef.current, enterClasses);
          addClasses(nodeRef.current, enterStartClasses);
        }
      }}
      onEntering={() => {
        if (nodeRef.current) {
          removeClasses(nodeRef.current, enterStartClasses);
          addClasses(nodeRef.current, enterEndClasses);
        }
      }}
      onEntered={() => {
        if (nodeRef.current) {
          removeClasses(nodeRef.current, enterEndClasses);
          removeClasses(nodeRef.current, enterClasses);
        }
      }}
      onExit={() => {
        if (nodeRef.current) {
          addClasses(nodeRef.current, leaveClasses);
          addClasses(nodeRef.current, leaveStartClasses);
        }
      }}
      onExiting={() => {
        if (nodeRef.current) {
          removeClasses(nodeRef.current, leaveStartClasses);
          addClasses(nodeRef.current, leaveEndClasses);
        }
      }}
      onExited={() => {
        if (nodeRef.current) {
          removeClasses(nodeRef.current, leaveEndClasses);
          removeClasses(nodeRef.current, leaveClasses);
          if (removeFromDom) nodeRef.current.style.display = 'none';
        }
      }}
      {...rest}
    >
      <Component ref={nodeRef as unknown as React.Ref<HTMLElement>}>
        {children}
      </Component>
    </ReactCSSTransition>
  );
};

export default Transition;
