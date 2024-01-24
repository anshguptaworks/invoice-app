import { IconProps } from '../index'

const Home = ({ className, pathClassName }: IconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        className={pathClassName}
        d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
        fill="black"
      />
    </svg>
  )
}

export default Home
