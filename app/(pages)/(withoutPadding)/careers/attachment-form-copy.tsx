import { useState } from "react";
import { PlusCircle, File, Loader2, X } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";

export const AttachmentForm = ({ setHasAttachment, setAttachmentLinks }: any) => {
  const [isEditing, setIsEditing] = useState(false);
  const [attachments, setAttachments] = useState<any[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const toggleEdit = () => setIsEditing((current) => !current);

  const onSubmit = (url: string) => {
    try {
      const newAttachment = { id: new Date().toISOString(), name: url };
      setAttachments((current) => [...current, newAttachment]);
      setAttachmentLinks((current: any) => [...current, url]); // Pass the attachment URLs to parent
      toast.success("File uploaded successfully");
      setHasAttachment(true); // Set the parent form's attachment state
      toggleEdit();
    } catch {
      toast.error("Something went wrong");
    }
  };

  const onDelete = (id: string) => {
    const updatedAttachments = attachments.filter((att) => att.id !== id);
    setAttachments(updatedAttachments);
    
    if (updatedAttachments.length === 0) {
      setHasAttachment(false); // If no attachments are left, mark as no attachment
    }
  };

  return (
    <div className="border bg-slate-100 rounded-md p-4 dark:bg-black dark:text-white">
      <div className="font-medium flex items-center justify-between">
        Attachments
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? "Cancel" : (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a file
            </>
          )}
        </Button>
      </div>

      {!isEditing && (
        <>
          {attachments.length === 0 && (
            <p className="text-sm mt-2 text-slate-500 italic">
              No attachments yet
            </p>
          )}
          {attachments.length > 0 && (
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
                    <Loader2 className="h-4 w-4 animate-spin" />
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
        </>
      )}

      {isEditing && (
        <div>
          <FileUpload
            endpoint="courseAttachment"
            onChange={(url) => {
              if (url) {
                onSubmit(url); // Get the real file URL here
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4 text-red-500">
            Upload a file less than 10MB
          </div>
        </div>
      )}
    </div>
  );
};
