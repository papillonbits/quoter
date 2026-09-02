/* eslint-disable import/no-dynamic-require, global-require */
const mockRequireListQuotePage = () => {
  jest.mock('../../pattern/page/ListQuotePage', () => 'ListQuotePage')
  return require('../../pattern/page/ListQuotePage')
}

const mockRequireNotFoundPage = () => {
  jest.mock('../../pattern/page/NotFoundPage', () => 'NotFoundPage')
  return require('../../pattern/page/NotFoundPage')
}

const mockRequirePath = () => {
  jest.mock('../path', () => ({
    appRootPath: 'fantastic-app-root-path',
    listQuotePagePath: 'fantastic-list-quote-page-path',
  }))
  return require('../path')
}

describe('index', () => {
  const path = mockRequirePath()

  const requireIndex = () => require('../index')

  describe('appRootRoute', () => {
    const expectedAppRootRoute = {
      path: path.appRootPath,
    }

    test('must return app root route object', () => {
      const { appRootRoute } = requireIndex()
      expect(appRootRoute).toEqual(expectedAppRootRoute)
    })
  })

  describe('listQuotePageRoute', () => {
    const listQuotePage = mockRequireListQuotePage()

    const expectedListQuotePageRoute = {
      path: path.listQuotePagePath,
      clientComponent: listQuotePage.AsyncListQuotePage,
      serverComponent: listQuotePage.ListQuotePage,
    }

    test('must return list quote page route object', () => {
      const { listQuotePageRoute } = requireIndex()
      expect(listQuotePageRoute).toEqual(expectedListQuotePageRoute)
    })
  })

  describe('notFoundPageRoute', () => {
    const notFoundPage = mockRequireNotFoundPage()

    const expectedNotFoundPageRoute = {
      clientComponent: notFoundPage.AsyncNotFoundPage,
      serverComponent: notFoundPage.NotFoundPage,
    }

    test('must return not found page route object', () => {
      const { notFoundPageRoute } = requireIndex()
      expect(notFoundPageRoute).toEqual(expectedNotFoundPageRoute)
    })
  })
})
/* eslint-enable import/no-dynamic-require, global-require */
