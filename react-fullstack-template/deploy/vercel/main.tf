terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 5.0.0"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_api_token
}

data "vercel_project_directory" "project_directory" {
  path = "../.."
}
