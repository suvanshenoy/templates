resource "vercel_project_domain" "backend_domain" {
  project_id = vercel_project.backend_project.id
  domain     = split("://", var.backend_url)[1]
}


resource "vercel_project_domain" "frontend_domain" {
  project_id = vercel_project.frontend_project.id
  domain     = split("://", var.frontend_url)[1]
}
