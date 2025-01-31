import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function PatientDetailsContent() {
  // Mock patient data
  const patient = {
    id: 'PT12345',
    name: 'John Doe',
    email: 'john.doe@example.com',
    consultationType: 'Orthopedic Surgery',
    phoneNumber: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, USA 12345',
    medicalCondition:
      'Chronic knee pain due to osteoarthritis, seeking knee replacement surgery.',
  }

  // Mock medical documents
  const medicalDocuments = [
    { id: 1, name: 'Medical History.pdf', date: '2023-05-15' },
    { id: 2, name: 'X-Ray Results.jpg', date: '2023-06-01' },
    { id: 3, name: 'Blood Test Results.pdf', date: '2023-06-10' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-blue-600">Patient Details</h1>

      {/* Patient Information Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600">
            Patient Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="font-semibold">Patient ID:</p>
              <p>{patient.id}</p>
            </div>
            <div>
              <p className="font-semibold">Name:</p>
              <p>{patient.name}</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>{patient.email}</p>
            </div>
            <div>
              <p className="font-semibold">Consultation Type:</p>
              <p>{patient.consultationType}</p>
            </div>
            <div>
              <p className="font-semibold">Phone Number:</p>
              <p>{patient.phoneNumber}</p>
            </div>
            <div>
              <p className="font-semibold">Address:</p>
              <p>{patient.address}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Patient's Explanation:</p>
            <p>{patient.medicalCondition}</p>
          </div>
        </CardContent>
      </Card>

      {/* Medical Documents Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600">
            Medical Documents
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <ul className="divide-y divide-gray-200">
            {medicalDocuments.map((doc) => (
              <li
                key={doc.id}
                className="flex items-center justify-between py-4"
              >
                <div>
                  <p className="font-semibold">{doc.name}</p>
                  <p className="text-sm text-gray-500">
                    Uploaded on: {doc.date}
                  </p>
                </div>
                <Button variant="outline">View</Button>
              </li>
            ))}
          </ul>
          <form className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label
                htmlFor="approval-letter"
                className="text-lg font-bold text-blue-600"
              >
                Add more Documents
              </Label>
              <Input id="approval-letter" type="file" />
            </div>
            <Button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Upload Documents
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Appointment Approval Letter Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600">
            Upload Appointment Approval Letter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="approval-letter">Approval Letter</Label>
              <Input id="approval-letter" type="file" />
            </div>
            <Button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Upload Approval Letter
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function PatientDetails() {
  return (
    // <div className="flex h-full flex-col">
    <PatientDetailsContent />
    // </div>
  )
}

export default PatientDetails
