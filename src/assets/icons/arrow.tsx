import { IconProps } from '../index'

const Arrow = ({ className, pathClassName }: IconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      className={className}
    >
      <path
        className={pathClassName}
        d="M1 1L5.2279 5.2279L9.4558 1"
        stroke="#7C5DFA"
        strokeWidth="2"
      />
    </svg>
  )
}

export default Arrow
