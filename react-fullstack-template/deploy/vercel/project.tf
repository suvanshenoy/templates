resource "vercel_project" "backend_project" {
  name             = "portfolio-backend"
  framework        = "nestjs"
  build_command    = "sh ../../vercel.backend.sh"
  output_directory = "../../apps/nest/dist"
  root_directory   = "packages/nest-src"
}

resource "vercel_project" "frontend_project" {
  name             = "portfolio-frontend"
  framework        = "ionic-react"
  build_command    = "sh ../../vercel.frontend.sh"
  output_directory = "../../apps/react-ionic-vite/dist"
  root_directory   = "packages/react-ionic-vite-src"
  options_allowlist = {
    paths = [
      {
        value = "/api/link/resume"

      }
    ]
  }
}
