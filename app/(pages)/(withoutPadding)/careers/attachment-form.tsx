import { useState } from "react"
import { File, Loader2, X } from "lucide-react"
import toast from "react-hot-toast"
import { FileUpload } from "@/components/file-upload"

interface Attachment {
  id: string
  name: string
}

interface AttachmentFormProps {
  setHasAttachment: (value: boolean) => void
  setAttachmentLinks: (value: string[]) => void
}

export default function AttachmentForm({ setHasAttachment, setAttachmentLinks }: AttachmentFormProps) {
  const [attachments, setAttachments] = useState<Attachment[]>([])
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const onSubmit = (url: string) => {
    try {
      const newAttachment = { id: new Date().toISOString(), name: url }
      const updatedAttachments = [...attachments, newAttachment]
      setAttachments(updatedAttachments)
      setAttachmentLinks(updatedAttachments.map(att => att.name))
      setHasAttachment(true)
      toast.success("File uploaded successfully")
    } catch {
      toast.error("Something went wrong")
    }
  }

  const onDelete = (id: string) => {
    setDeletingId(id)
    try {
      const updatedAttachments = attachments.filter((att) => att.id !== id)
      setAttachments(updatedAttachments)
      setAttachmentLinks(updatedAttachments.map(att => att.name))
      
      if (updatedAttachments.length === 0) {
        setHasAttachment(false)
      }
      toast.success("File deleted successfully")
    } catch {
      toast.error("Failed to delete file")
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="border bg-slate-100 rounded-md p-4 dark:bg-black dark:text-white">
      <div className="font-medium mb-4">Attachments</div>

      <FileUpload
        endpoint="courseAttachment"
        onChange={(url) => {
          if (url) {
            onSubmit(url)
          }
        }}
      />
      
      <div className="text-xs text-muted-foreground mt-4 mb-4 text-red-500">
        Upload a file less than 8MB
      </div>

      {attachments.length === 0 ? (
        <p className="text-sm mt-2 text-slate-500 italic">
          No attachments yet
        </p>
      ) : (
        <div className="space-y-2">
          {attachments.map((attachment) => (
            <div
              key={attachment.id}
              className="flex items-center p-3 w-full bg-sky-100 border-sky-200 border text-sky-700 rounded-md"
            >
              <File className="h-4 w-4 mr-2 flex-shrink-0" />
              <p className="text-xs line-clamp-1">
                {attachment.name}
              </p>
              {deletingId === attachment.id ? (
                <Loader2 className="h-4 w-4 animate-spin ml-auto" />
              ) : (
                <button
                  onClick={() => onDelete(attachment.id)}
                  className="ml-auto hover:opacity-75 transition"
                  aria-label={`Delete ${attachment.name}`}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}