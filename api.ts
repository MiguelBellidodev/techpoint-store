// API Endpoints para TechPoint Store
export async function getProjectData() {
  return {
    status: 'healthy',
    project: 'TechPoint Store',
    deployment: 'https://techpoint-store.vercel.app',
    repository: 'https://github.com/MiguelBellidodev/techpoint-store',
    uptime: '99.98%'
  }
}