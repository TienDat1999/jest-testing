
export function createMockRouter (router) {
    return {
            basePath:'',
            pathname: '',
            route: '',
            query: {},
            asPath: '',
            back: jest.fn(),
            beforePopState: jest.fn(() => null),
            prefetch: jest.fn(() => Promise.resolve()),
            push: jest.fn(),
            reload: jest.fn(),
            replace: jest.fn(),
            events: {
              on: jest.fn(),
              off: jest.fn(),
              emit: jest.fn(),
            },
            isFallback: false,
            isLocaleDomain: false,
            isReady: true,
            defaultLocale: 'en',
            domainLocales:[],
            isPreview: false,
            locale: '',
            ...router
          }
    
}