type Config = { [key: string]: any }

export const config: Config = {
  app: {
    siteURLOrigin: "https://granqvist.sls.fi",
    projectNameDB: "granqvist",
    projectId: 2,
    backendBaseURL: "https://api.sls.fi/digitaledition",
    alternateFacsimileBaseURL: "",
    i18n: {
      languages: [
        { code: "sv", label: "Svenska", region: "FI" },
        { code: "en", label: "English", region: "GB" },
        { code: "ar", label: "Arabic/English", region: "AR" }
      ],
      defaultLanguage: "sv",
      multilingualCollectionTableOfContents: false,
      multilingualReadingTextLanguages: [],
      multilingualNamedEntityData: false
    },
    enableRouterLoadingBar: true,
    openGraphMetaTags: {
      enabled: true,
      image: {
        sv: {
          altText: "alt-text",
          URL: "assets/images/home-page-banner.jpg"
        },
        fi: {
          altText: "alt-teksti",
          URL: "assets/images/home-page-banner.jpg"
        }
      }
    },
    prebuild: {
      sitemap: true,
      staticCollectionMenus: true
    },
    ssr: {
      collectionSideMenu: false
    }
  },
  collections: {
    addTEIClassNames: false,
    replaceImageAssetsPaths: false,
    enableLegacyIDs: false,
    enableMathJax: false,
    firstTextItem: {},
    frontMatterPages: {
      cover: false,
      title: true,
      foreword: false,
      introduction: false
    },
    highlightSearchMatches: true,
    inlineIllustrations: [],
    mediaCollectionMappings: {},
    order: [
      [537, 538, 539, 29]
    ]
  },
  ebooks: [
    {
      title: "Birth and Childhood Among the Arabs",
      filename: "granqvist-birth-and-childhood-among-the-arabs.pdf",
      externalFileURL: "",
      coverURL: "assets/images/covers/books/granqvist_birth_and_childhood_among_the_arabs.jpg",
      downloadOptions: [
        {
          url: "https://api.sls.fi/digitaledition/granqvist/files/147/pdf/147_11675_Birth_and_Childhood.pdf/granqvist-birth-and-childhood-among-the-arabs.pdf",
          label: "PDF"
        },
        {
          url: "https://api.sls.fi/digitaledition/granqvist/files/147/epub/granqvist-birth-and-childhood-among-the-arabs.epub/147.epub",
          label: "EPUB"
        }
      ]
    },
    {
      title: "Child Problems Among the Arabs",
      filename: "granqvist-child-problems-among-the-arabs.pdf",
      externalFileURL: "",
      coverURL: "assets/images/covers/books/granqvist_child_problems_among_the_arabs.jpg",
      downloadOptions: [
        {
          url: "https://api.sls.fi/digitaledition/granqvist/files/148/pdf/148_11676_Child_Problems.pdf/granqvist-child-problems-among-the-arabs.pdf",
          label: "PDF"
        },
        {
          url: "https://api.sls.fi/digitaledition/granqvist/files/148/epub/granqvist-child-problems-among-the-arabs.epub/148.epub",
          label: "EPUB"
        }
      ]
    },
    {
      title: "Marriage Conditions in a Palestinian Village I",
      filename: "granqvist-marriage-conditions-in-a-palestinian-village-1.pdf",
      externalFileURL: "",
      coverURL: "assets/images/covers/books/granqvist_marriage_conditions_in_a_palestinian_village_1.jpg",
      downloadOptions: [
        {
          url: "https://api.sls.fi/digitaledition/granqvist/files/30/pdf/30_11672_Marriage_Conditions_1.pdf/granqvist-marriage-conditions-in-a-palestinian-village-1.pdf",
          label: "PDF"
        },
        {
          url: "https://api.sls.fi/digitaledition/granqvist/files/30/epub/granqvist-marriage-conditions-in-a-palestinian-village-1.epub/30.epub",
          label: "EPUB"
        }
      ]
    },
    {
      title: "Marriage Conditions in a Palestinian Village II",
      filename: "granqvist-marriage-conditions-in-a-palestinian-village-2.pdf",
      externalFileURL: "",
      coverURL: "assets/images/covers/books/granqvist_marriage_conditions_in_a_palestinian_village_2.jpg",
      downloadOptions: [
        {
          url: "https://api.sls.fi/digitaledition/granqvist/files/31/pdf/31_11673_Marriage_Conditions_2.pdf/granqvist-marriage-conditions-in-a-palestinian-village-2.pdf",
          label: "PDF"
        },
        {
          url: "https://api.sls.fi/digitaledition/granqvist/files/31/epub/granqvist-marriage-conditions-in-a-palestinian-village-2.epub/31.epub",
          label: "EPUB"
        }
      ]
    },
    {
      title: "Muslim Death and Burial",
      filename: "granqvist-muslim-death-and-burial.pdf",
      externalFileURL: "",
      coverURL: "assets/images/covers/books/granqvist_muslim_death_and_burial.jpg",
      downloadOptions: [
        {
          url: "https://api.sls.fi/digitaledition/granqvist/files/149/pdf/149_11677_Death_Burial.pdf/granqvist-muslim-death-and-burial.pdf",
          label: "PDF"
        },
        {
          url: "https://api.sls.fi/digitaledition/granqvist/files/149/epub/granqvist-muslim-death-and-burial.epub/149.epub",
          label: "EPUB"
        }
      ]
    }
  ],
  page: {
    about: {
      initialPageNode: "01"
    },
    elasticSearch: {
      enableFilters: true,
      enableSortOptions: false,
      filterGroupsOpenByDefault: [],
      hitsPerPage: 15,
      indices: ["granqvist"],
      openReadingTextWithComments: false,
      textHighlightFragmentSize: 150,
      textHighlightType: "fvh",
      textTitleHighlightType: "fvh",
      typeFilterGroupOptions: [],
      fixedFilters: [
        {
          terms: {
            deleted: ["0"]
          }
        },
        {
          terms: {
            published: ["2"]
          }
        }
      ],
      additionalSourceFields: [],
      aggregations: {}
    },
    foreword: {
      showURNButton: true,
      showViewOptionsButton: true
    },
    home: {
      bannerImage: {
        altTexts: {
          sv: "Svartvitt foto av fem personer som arbetar utomhus på en äng. Fyra mörkhyade personer i bakgrunden böjer sig ner med ryggarna mot kameran. En ljushyad kvinna i hatt i förgrunden ler in i kameran.",
          en: "Black and white photo of five people working outdoors in a meadow. Four dark-skinned people in the background are bent over with their backs to the camera. A light-skinned woman in a hat in the foreground is smiling at the camera.",
          ar: "Black and white photo of five people working outdoors in a meadow. Four dark-skinned people in the background are bent over with their backs to the camera. A light-skinned woman in a hat in the foreground is smiling at the camera."
        },
        intrinsicSize: {
          height: 469,
          width: 1920
        },
        orientationPortrait: false,
        alternateSources: [
          {
            srcset: "assets/images/granqvist_artas_surroundings_1930-1931_1920x469.avif 1920w",
            type: "image/avif"
          },
          {
            srcset: "assets/images/granqvist_artas_surroundings_1930-1931_1920x469.jpg 1920w",
            type: "image/jpeg"
          }
        ],
        URL: "assets/images/granqvist_artas_surroundings_1930-1931_1920x469.jpg"
      },
      portraitOrientationSettings: {
        imagePlacement: {
          onRight: false,
          squareCroppedVerticalOffset: "10%"
        },
        siteTitleOnImageOnSmallScreens: false
      },
      showContentGrid: true,
      showFooter: true,
      showSearchbar: false
    },
    index: {
      keywords: {
        maxFetchSize: 500,
        showFilter: false,
        publishedStatus: 2
      },
      persons: {
        database: "elastic",
        maxFetchSize: 500,
        showFilter: false,
        publishedStatus: 2
      },
      places: {
        maxFetchSize: 500,
        showFilter: false,
        publishedStatus: 2
      },
      works: {
        publishedStatus: 2
      }
    },
    introduction: {
      hasSeparateTOC: true,
      showTextDownloadButton: true,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        personInfo: true,
        placeInfo: false,
        workInfo: true,
        paragraphNumbering: true,
        pageBreakEdition: true
      }
    },
    mediaCollection: {
      showURNButton: false
    },
    text: {
      defaultViews: ["facsimiles"],
      defaultViewOptions: [],
      showTextDownloadButton: false,
      showURNButton: false,
      showViewOptionsButton: false,
      viewOptions: {
        comments: false,
        personInfo: false,
        placeInfo: false,
        emendations: false,
        normalisations: false,
        workInfo: false,
        abbreviations: false,
        paragraphNumbering: false,
        pageBreakOriginal: false,
        pageBreakEdition: false
      },
      viewTypes: {
        showAll: false,
        readingtext: false,
        comments: false,
        facsimiles: true,
        manuscripts: false,
        variants: false,
        illustrations: false,
        legend: false,
        metadata: false
      }
    },
    title: {
      loadContentFromMarkdown: true,
      showURNButton: false,
      showViewOptionsButton: false
    }
  },
  component: {
    collectionSideMenu: {
      sortableCollectionsAlphabetical: [],
      sortableCollectionsChronological: [],
      sortableCollectionsCategorical: [],
      categoricalSortingPrimaryKey: "",
      categoricalSortingSecondaryKey: ""
    },
    contentGrid: {
      includeEbooks: true,
      includeMediaCollection: true,
      mediaCollectionCoverURL: "assets/images/covers/photographs.jpg",
      mediaCollectionCoverAltTexts: {
        sv: "Svartvitt foto av en ung kvinna som bär en stor korg fylld med föremål på sitt huvud. Hon står på en stenväg framför en karg kulle.",
        en: "Black-and-white photo of a young woman carrying a large basket filled with items on her head. She stands on a stone road in front of a barren hill.",
        ar: "Black-and-white photo of a young woman carrying a large basket filled with items on her head. She stands on a stone road in front of a barren hill."
      },
      showTitles: true
    },
    epub: {
      showTOCButton: false,
      showURNButton: false,
      showViewOptionsButton: false
    },
    facsimiles: {
      imageQuality: 1,
      showTitle: false
    },
    mainSideMenu: {
      items: {
        home: false,
        about: true,
        ebooks: true,
        collections: true,
        mediaCollections: true,
        indexKeywords: true,
        indexPersons: true,
        indexPlaces: true,
        indexWorks: false
      }
    },
    manuscripts: {
      showTitle: true,
      showNormalizedToggle: true,
      showOpenLegendButton: true
    },
    topMenu: {
      showAboutButton: true,
      showContentButton: true,
      showElasticSearchButton: false,
      showURNButton: false,
      showLanguageButton: true,
      showSiteLogo: true,
      siteLogoDefaultImageURL: "assets/images/logo/SLS_logo_full_white_346x112.png",
      siteLogoMobileImageURL: "assets/images/logo/SLS_logo_symbol_white_112x112.png",
      siteLogoLinkURL: "https://www.sls.fi/",
      siteLogoDimensions: {
        default: {
          height: 56,
          width: 173
        },
        mobile: {
          height: 56,
          width: 56
        }
      }
    },
    variants: {
      showOpenLegendButton: true
    }
  },
  modal: {
    downloadTexts: {
      introductionFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      readingTextFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      commentsFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      manuscriptsFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      }
    },
    fullscreenImageViewer: {
      imageQuality: 1
    },
    referenceData: {
      URNResolverURL: "https://urn.fi/",
    },
    namedEntity: {
      showAliasAndPrevLastName: false,
      showArticleData: true,
      showCityRegionCountry: true,
      showDescriptionLabel: false,
      showGalleryOccurrences: true,
      showMediaData: true,
      showOccupation: false,
      showOccurrences: true,
      showType: false,
      useSimpleWorkMetadata: false
    }
  }
}
