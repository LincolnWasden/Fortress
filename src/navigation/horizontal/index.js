// ** Icon imports
import Table from 'mdi-material-ui/Table'
import ChartDonut from 'mdi-material-ui/ChartDonut'
import FormSelect from 'mdi-material-ui/FormSelect'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import LockOutline from 'mdi-material-ui/LockOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import ArchiveOutline from 'mdi-material-ui/ArchiveOutline'
import DotsHorizontal from 'mdi-material-ui/DotsHorizontal'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import VectorArrangeBelow from 'mdi-material-ui/VectorArrangeBelow'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import PackageVariantClosed from 'mdi-material-ui/PackageVariantClosed'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import CheckboxMarkedCircleOutline from 'mdi-material-ui/CheckboxMarkedCircleOutline'
import { FileDocumentMultiple } from 'mdi-material-ui'

const navigation = () => {
  return [
    {
      title: 'Home View',
      icon: HomeOutline,
      badgeContent: 'new',
      badgeColor: 'error',
      path: '/dashboards/analytics'
    },
    
    // {
    //   title: 'Email',
    //   icon: EmailOutline,
    //   path: '/apps/email'
    // },
    // {
    //   title: 'Chat',
    //   icon: MessageOutline,
    //   path: '/apps/chat'
    // },
    // {
    //   title: 'Calendar',
    //   icon: CalendarBlankOutline,
    //   path: '/apps/calendar'
    // },
    // {
    //   title: 'Invoice',
    //   icon: FileDocumentOutline,
    //   children: [
    //     {
    //       title: 'List',
    //       path: '/apps/invoice/list'
    //     },
    //     {
    //       title: 'Preview',
    //       path: '/apps/invoice/preview'
    //     },
    //     {
    //       title: 'Edit',
    //       path: '/apps/invoice/edit'
    //     },
    //     {
    //       title: 'Add',
    //       path: '/apps/invoice/add'
    //     }
    //   ]
    // },
    // {
    //   title: 'User',
    //   icon: AccountOutline,
    //   children: [
    //     {
    //       title: 'List',
    //       path: '/apps/user/list'
    //     },
    //     {
    //       title: 'View',
    //       path: '/apps/user/view'
    //     }
    //   ]
    // },
    // {
    //   title: 'Roles & Permissions',
    //   icon: LockOutline,
    //   children: [
    //     {
    //       title: 'Roles',
    //       path: '/apps/roles'
    //     },
    //     {
    //       title: 'Permissions',
    //       path: '/apps/permissions'
    //     }
    //   ]
    // },
    {
      title: 'Account Settings',
      icon: AccountOutline,
      path: '/pages/account-settings',
    },
   
    {
      title: 'Help',
      icon: FileDocumentOutline,
      children: [
        {
          title: 'Pricing',
          path: '/pages/pricing'
        },
        {
          title: 'FAQ',
          path: '/pages/faq'
        },
      ]
    },
    {
      icon: VectorArrangeBelow,
      title: 'Features Coming',
      path: '/pages/dialog-examples'
    },
    
  ]
}

export default navigation
