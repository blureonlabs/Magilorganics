export const HEADER_QUERY = `#graphql
  query HeaderQuery($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    shop {
      name
      description
    }
  }
` as const;
