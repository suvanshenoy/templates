resource "vercel_deployment" "backend_deployment" {
  project_id  = vercel_project.backend_project.id
  files       = data.vercel_project_directory.project_directory.files
  path_prefix = data.vercel_project_directory.project_directory.path
  production  = true
}

resource "vercel_deployment" "frontend_deployment" {
  project_id  = vercel_project.frontend_project.id
  files       = data.vercel_project_directory.project_directory.files
  path_prefix = data.vercel_project_directory.project_directory.path
  production  = true
}
