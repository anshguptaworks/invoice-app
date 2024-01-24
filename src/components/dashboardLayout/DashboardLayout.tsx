import cx from 'classnames'

import { DashboardLayoutProps } from './types/dashborat.types'
import Sidebar from '../sidebar/Sidebar'

const DashboardLayout = ({ children, className }: DashboardLayoutProps): JSX.Element => {
  return (
    <div className="h-screen flex w-full flex-col md:flex-row duration-300 dark-bg-dark400 bg-grey50">
      <Sidebar />
      <div className="flex flex-col w-full ">
        <div className={cx('flex justify-center py-8 md:py[4.5rem] md:px[0px]', className)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
