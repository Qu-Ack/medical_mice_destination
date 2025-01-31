import { FileText, Calendar, Download, Upload } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import SidebarWrapper from '../UserDashboard_Layout'

interface Document {
  id: number
  name: string
  date: string
  status: string
  type: string
}

interface DocumentListProps {
  documents: Document[]
}

const DocumentList = ({ documents }: DocumentListProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new':
        return 'bg-blue-500'
      case 'ready':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="flex items-center justify-between rounded-lg border bg-white p-3 transition-shadow hover:shadow-md"
        >
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="truncate text-sm font-medium text-gray-900">
                {doc.name}
              </p>
              <Badge
                variant="secondary"
                className={`${getStatusColor(doc.status)} text-white`}
              >
                {doc.status}
              </Badge>
            </div>
            <div className="mt-1 flex gap-2">
              <p className="text-xs text-gray-500">{doc.type}</p>
              <span className="text-xs text-gray-400">•</span>
              <p className="text-xs text-gray-500">
                {new Date(doc.date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="ml-2">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  )
}

const DocumentsContainer = () => {
  // Mock data - in a real app this would come from an API
  const uploadedDocs = [
    {
      id: 1,
      name: 'Medical History.pdf',
      date: '2024-02-20',
      status: 'Uploaded',
      type: 'Medical Record',
    },
    {
      id: 2,
      name: 'Previous Treatment Records.pdf',
      date: '2024-02-19',
      status: 'Uploaded',
      type: 'Medical Record',
    },
  ]

  const receivedDocs = [
    {
      id: 3,
      name: 'Appointment Confirmation.pdf',
      date: '2024-02-21',
      status: 'New',
      type: 'Appointment',
    },
    {
      id: 4,
      name: 'Treatment Plan.pdf',
      date: '2024-02-21',
      status: 'New',
      type: 'Medical Record',
    },
  ]

  const visaDocs = [
    {
      id: 5,
      name: 'Hospital Invitation Letter.pdf',
      date: '2024-02-22',
      status: 'Ready',
      type: 'Visa Document',
    },
  ]

  return (
    <div className="p-8">
      <div className="max-w-7xl flex-1 space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Medical Documents</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Uploaded Documents */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                <div className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-blue-600" />
                  Uploaded
                </div>
              </CardTitle>
              <Badge variant="secondary">{uploadedDocs.length}</Badge>
            </CardHeader>
            <CardContent>
              <DocumentList documents={uploadedDocs} />
            </CardContent>
          </Card>

          {/* Received Documents */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Received
                </div>
              </CardTitle>
              <Badge variant="secondary">{receivedDocs.length}</Badge>
            </CardHeader>
            <CardContent>
              <DocumentList documents={receivedDocs} />
            </CardContent>
          </Card>

          {/* Visa Documents */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Visa Documents
                </div>
              </CardTitle>
              <Badge variant="secondary">{visaDocs.length}</Badge>
            </CardHeader>
            <CardContent>
              <DocumentList documents={visaDocs} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

const DocumentsPage = () => {
  return <DocumentsContainer />
}

export default DocumentsPage
