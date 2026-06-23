variable "vercel_api_token" {
  description = "api token for vercel"
  type        = string
}

variable "backend_url" {
  description = "backend url for portfolio backend"
  type        = string
}

variable "frontend_url" {
  description = "frontend url for portfolio frontend"
  type        = string
}

variable "database_url" {
  description = "database url for supabase (DIRECT_URL)"
  type        = string
}
