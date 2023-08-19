import { ParsedUrlQuery } from 'querystring'

export interface Params extends ParsedUrlQuery {
  id?: string
  category?: string
  subcategory?: string
}
