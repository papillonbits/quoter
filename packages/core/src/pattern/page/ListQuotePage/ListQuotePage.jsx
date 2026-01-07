import { ListQuoteTemplate } from '../../template/ListQuoteTemplate'
import { propTypes } from './ListQuotePage.prop'

export function ListQuotePage() {
  return <ListQuoteTemplate />
}

ListQuotePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ListQuotePage
