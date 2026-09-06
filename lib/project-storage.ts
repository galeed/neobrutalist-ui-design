export type ProjectKind = "audio" | "video" | "image" | "text"

export interface StoredProject {
  id: string
  kind: ProjectKind
  name: string
  data: unknown
  updatedAt: number
}

const DATABASE_NAME = "creative-studio"
const STORE_NAME = "projects"

function openDatabase() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, 1)
    request.onupgradeneeded = () => request.result.createObjectStore(STORE_NAME, { keyPath: "id" })
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export async function saveProject(project: StoredProject) {
  const database = await openDatabase()
  await new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readwrite")
    transaction.objectStore(STORE_NAME).put(project)
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error)
  })
  database.close()
}

export async function listProjects(kind?: ProjectKind) {
  const database = await openDatabase()
  const projects = await new Promise<StoredProject[]>((resolve, reject) => {
    const request = database.transaction(STORE_NAME, "readonly").objectStore(STORE_NAME).getAll()
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
  database.close()
  return projects.filter((project) => !kind || project.kind === kind).sort((a, b) => b.updatedAt - a.updatedAt)
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

export function downloadText(text: string, filename: string, type = "text/plain") {
  downloadBlob(new Blob([text], { type }), filename)
}
