import {
  Animated,
  GestureResponderEvent,
  LayoutChangeEvent,
  PanResponderGestureState,
  ViewProps,
} from 'react-native';
import { ReactNode } from 'react';

export enum SwipeDirection {
  SWIPE_UP = 'SWIPE_UP',
  SWIPE_DOWN = 'SWIPE_DOWN',
  SWIPE_LEFT = 'SWIPE_LEFT',
  SWIPE_RIGHT = 'SWIPE_RIGHT',
}

export interface ZoomableViewEvent {
  zoomLevel: number;
  offsetX: number;
  offsetY: number;
  originalHeight: number;
  originalWidth: number;
  originalPageX: number;
  originalPageY: number;
}

export interface ReactNativeZoomableViewProps {
  // options
  style?: ViewProps['style'];
  children?: ReactNode;
  zoomEnabled?: boolean;
  panEnabled?: boolean;
  initialZoom?: number;
  initialOffsetX?: number;
  initialOffsetY?: number;
  contentWidth?: number;
  contentHeight?: number;
  panBoundaryPadding?: number;
  maxZoom?: number;
  minZoom?: number;
  doubleTapDelay?: number;
  doubleTapZoomToCenter?: boolean;
  bindToBorders?: boolean;
  zoomStep?: number;
  pinchToZoomInSensitivity?: number;
  pinchToZoomOutSensitivity?: number;
  movementSensibility?: number;
  longPressDuration?: number;
  visualTouchFeedbackEnabled?: boolean;
  disablePanOnInitialZoom?: boolean;

  // Zoom animated value ref
  zoomAnimatedValue?: Animated.Value;
  panAnimatedValueXY?: Animated.ValueXY;

  // debug
  debug?: boolean;

  // callbacks
  onLayout?: (event: Pick<LayoutChangeEvent, 'nativeEvent'>) => void;
  onTransform?: (zoomableViewEventObject: ZoomableViewEvent) => void;
  onSingleTap?: (
    event: GestureResponderEvent,
    zoomableViewEventObject: ZoomableViewEvent
  ) => void;
  onDoubleTapBefore?: (
    event: GestureResponderEvent,
    zoomableViewEventObject: ZoomableViewEvent
  ) => void;
  onDoubleTapAfter?: (
    event: GestureResponderEvent,
    zoomableViewEventObject: ZoomableViewEvent
  ) => void;
  onShiftingBefore?: (
    event: GestureResponderEvent | null,
    gestureState: PanResponderGestureState | null,
    zoomableViewEventObject: ZoomableViewEvent
  ) => boolean;
  onShiftingAfter?: (
    event: GestureResponderEvent | null,
    gestureState: PanResponderGestureState | null,
    zoomableViewEventObject: ZoomableViewEvent
  ) => boolean;
  onShiftingEnd?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent
  ) => void;
  onZoomBefore?: (
    event: GestureResponderEvent | null,
    gestureState: PanResponderGestureState | null,
    zoomableViewEventObject: ZoomableViewEvent
  ) => boolean | undefined;
  onZoomAfter?: (
    event: GestureResponderEvent | null,
    gestureState: PanResponderGestureState | null,
    zoomableViewEventObject: ZoomableViewEvent
  ) => void;
  onZoomEnd?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent
  ) => void;
  onLongPress?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent
  ) => void;
  onStartShouldSetPanResponder?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
    baseComponentResult: boolean
  ) => boolean;
  onPanResponderGrant?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent
  ) => void;
  onPanResponderEnd?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent
  ) => void;
  onPanResponderMove?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent
  ) => boolean;
  onPanResponderTerminate?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent
  ) => void;
  onPanResponderTerminationRequest?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent
  ) => boolean;
  onShouldBlockNativeResponder?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent
  ) => boolean;
  onStartShouldSetPanResponderCapture?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => boolean;
  onMoveShouldSetPanResponderCapture?: (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => boolean;
  onStaticPinPress?: (event: GestureResponderEvent) => void;
  onStaticPinLongPress?: (event: GestureResponderEvent) => void;
  staticPinPosition?: Vec2D;
  staticPinIcon?: React.ReactElement;
  onStaticPinPositionChange?: (position: Vec2D) => void;
  onStaticPinPositionMove?: (position: Vec2D) => void;
  animatePin: boolean;
  pinProps?: ViewProps;
  disableMomentum?: boolean;
}

export interface Vec2D {
  x: number;
  y: number;
}

export interface Size2D {
  width: number;
  height: number;
}

export interface TouchPoint extends Vec2D {
  id: string;
  isSecondTap?: boolean;
}

export interface ReactNativeZoomableViewState {
  touches?: TouchPoint[];
  originalWidth: number;
  originalHeight: number;
  originalPageX: number;
  originalPageY: number;
  originalX: number;
  originalY: number;
  debugPoints?: undefined | Vec2D[];
  pinSize: Size2D;
}

export interface ReactNativeZoomableViewWithGesturesProps
  extends ReactNativeZoomableViewProps {
  swipeLengthThreshold?: number;
  swipeVelocityThreshold?: number;
  swipeDirectionalThreshold?: number;
  swipeMinZoom?: number;
  swipeMaxZoom?: number;
  swipeDisabled?: boolean;
  onSwipe?: (
    swipeDirection: SwipeDirection,
    gestureState: PanResponderGestureState
  ) => void;
  onSwipeUp?: (gestureState: PanResponderGestureState) => void;
  onSwipeDown?: (gestureState: PanResponderGestureState) => void;
  onSwipeLeft?: (gestureState: PanResponderGestureState) => void;
  onSwipeRight?: (gestureState: PanResponderGestureState) => void;
}
