import {
  Users,
  MessageCircle,
  FileText,
  Globe,
  Hotel,
  Settings,
  User,
  Send,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarGroupLabel,
} from '@/components/ui/sidebar'

const mainMenuItems = [
  {
    title: 'Profile',
    icon: User,
    url: '/demo/dashboard/user/profile',
  },
  {
    title: 'Browse Hospitals',
    icon: Users,
    url: '/demo/dashboard/user/start_journey',
  },
  {
    title: 'Doctor Chat',
    icon: MessageCircle,
    url: '/demo/dashboard/user/doctor_chat/',
  },
  {
    title: 'Documents',
    icon: FileText,
    url: '/demo/dashboard/user/documents/',
  },
  {
    title: 'E-visa',
    icon: Globe,
    url: '/demo/dashboard/user/evisa/',
  },
  {
    title: 'Flights',
    icon: Send,
    url: '/demo/dashboard/user/',
  },
  {
    title: 'Hotels',
    icon: Hotel,
    url: '/demo/dashboard/user/',
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h1 className="text-3xl font-bold text-blue-600">TBO</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold">
            User Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center space-x-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mt-auto">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings" className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
