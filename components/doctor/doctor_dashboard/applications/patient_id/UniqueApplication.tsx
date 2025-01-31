import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import SidebarWrapper from '../../DoctorDashboard_Layout'

export default function UniqueApplication() {
  return (
    <div className="container max-w-6xl py-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Application #APP001</h1>
          <p className="text-muted-foreground">Diabetic Consultation</p>
        </div>
        <div className="flex gap-3">
          <Button variant="destructive">Reject</Button>
          <Button className="bg-green-600">Approve</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Column - Patient Information */}
        <div className="space-y-6">
          <section>
            <h2 className="mb-4 text-lg font-semibold">Patient Information</h2>
            <div className="mb-4 flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-sm text-muted-foreground">
                  Patient ID: PT123456
                </p>
                <p className="text-sm text-muted-foreground">Age: 45 years</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-lg font-semibold">Contact Details</h2>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="text-muted-foreground">Email: </span>
                john.doe@example.com
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Phone: </span>
                +1 234 567 8900
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Address: </span>
                123 Medical Street, Healthcare City
              </p>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-lg font-semibold">Medical History</h2>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="text-muted-foreground">
                  Previous Conditions:{' '}
                </span>
                Type 2 Diabetes
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Medications: </span>
                Metformin
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Allergies: </span>
                None
              </p>
            </div>
          </section>
        </div>
        {/* Right Column - Patient's Explanation & Additional Info */}
        <div className="space-y-6">
          <section>
            <h2 className="mb-4 text-lg font-semibold">
              Patient's Explanation of Medical Condition
            </h2>
            <div className="rounded-lg border bg-card p-4">
              <p className="text-sm text-muted-foreground">
                "I have been experiencing frequent fatigue, increased thirst,
                and blurred vision over the past few months. My blood sugar
                levels have been consistently high, and I am concerned about
                managing my diabetes effectively. I would like to consult with a
                specialist to discuss my treatment options and lifestyle
                changes."
              </p>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-lg font-semibold">Symptoms</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gray-400" />
                <p className="text-sm">Fatigue</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gray-400" />
                <p className="text-sm">Increased Thirst</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gray-400" />
                <p className="text-sm">Blurred Vision</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gray-400" />
                <p className="text-sm">Frequent Urination</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
