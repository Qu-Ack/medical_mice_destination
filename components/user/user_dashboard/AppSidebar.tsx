import {
  Users,
  MessageCircle,
  FileText,
  Globe,
  Hotel,
  Settings,
  User,
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
    url: '/test/user/dashboard/profile',
  },
  {
    title: 'Browse Hospitals',
    icon: Users,
    url: '/test/user/dashboard/start_journey',
  },
  {
    title: 'Doctor Chat',
    icon: MessageCircle,
    url: '/test/user/dashboard/doctor_chat/',
  },
  {
    title: 'Documents',
    icon: FileText,
    url: '/test/user/dashboard/documents/',
  },
  {
    title: 'E-visa',
    icon: Globe,
    url: '/test/user/dashboard/evisa/',
  },
  {
    title: 'Flights and Hotels',
    icon: Hotel,
    url: '/test/user/dashboard/',
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
