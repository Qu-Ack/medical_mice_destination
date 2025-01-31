<<<<<<< HEAD:components/hospital/hospital_dashboard/HospitalDashboard_Layout.tsx
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Users, LayoutDashboard, Settings, Plus } from 'lucide-react'
=======
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
>>>>>>> 0597cb36808017ef36f46c1c63cc48d7279c0944:components/hospital/hospital_dashboard/AppSidebar.tsx
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
import { sidebarConfig } from './sideBarConfig'

<<<<<<< HEAD:components/hospital/hospital_dashboard/HospitalDashboard_Layout.tsx
const mainMenuItems = [
  {
    title: 'Doctors',
    icon: Users,
    url: '/demo/dashboard/hospital/doctor_team',
  },
  {
    title: 'Create Doctor',
    icon: Plus,
    url: '/demo/dashboard/hospital/register_doctor',
  },
  {
    title: 'Applications',
    icon: LayoutDashboard,
    url: '/demo/dashboard/hospital/applications',
  },
]

function AppSidebar() {
=======
interface AppSidebarProps {
  dashboardType: keyof typeof sidebarConfig
  userId: string
}

export function AppSidebar({ dashboardType, userId }: AppSidebarProps) {
  const pathname = usePathname()
  const menuItems = sidebarConfig[dashboardType]

>>>>>>> 0597cb36808017ef36f46c1c63cc48d7279c0944:components/hospital/hospital_dashboard/AppSidebar.tsx
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h1 className="text-3xl font-bold text-blue-600">TBO</h1>
        <p className="text-sm text-muted-foreground capitalize">{dashboardType} Portal</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold">
            Hospital Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const url = typeof item.url === 'function' ? item.url(userId) : item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={url}
                        className={cn(
                          "flex items-center space-x-2 w-full",
                          pathname === url && "bg-accent text-accent-foreground"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
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
                  <Link 
                    href={`/dashboard/${dashboardType}/${userId}/settings`}
                    className="flex items-center space-x-2"
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
<<<<<<< HEAD:components/hospital/hospital_dashboard/HospitalDashboard_Layout.tsx
}

export default function HospitalDashboard_Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="min-h-screen flex-1 p-8">{children}</main>
      </div>
    </SidebarProvider>
  )
}
=======
}
>>>>>>> 0597cb36808017ef36f46c1c63cc48d7279c0944:components/hospital/hospital_dashboard/AppSidebar.tsx
