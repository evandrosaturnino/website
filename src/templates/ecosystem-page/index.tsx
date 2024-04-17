import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../home-page/SectionTemplate"
import { Box } from "@chakra-ui/react"
import { IntegrationsCardGroup } from "../../components/IntegrationCard"
import ProgramsAndEvents from "./ProgramsAndEvents"
import ProjectsAndTools from "./ProjectsAndTools"
import ResourcesSection from "./ResourcesSection"
import CommunitySection from "./CommunitySection"
import { HighlightWords } from "../../components/HighlightWords"

const EcosystemPageTemplate: FC = ({ data }: any) => {
  const {
    ecosystemInfo,
    integrations,
    projectsAndToolsInfo,
    projectsAndTools,
    resourcesInfo,
    resources,
    communityInfo,
    community,
  } = data.markdownRemark.frontmatter
  const { highlighted } = ecosystemInfo

  return (
    <Box bgColor="gray.900">
      <SectionTemplate
        {...ecosystemInfo}
        title={
          <HighlightWords
            title={ecosystemInfo.title}
            highlighted={highlighted}
            bgGradient="linear-gradient(120.19deg, #BD30FF 3.32%, #7D00FF 95.02%)"
            fontWeight="bold"
          />
        }
        image={{
          ...ecosystemInfo.image,
          right: 0,
          mr: "-12rem",
          mt: "-3rem",
          w: "52rem",
        }}
        preTitle={null}
        columnReverse
        size="sm"
        isImageBackground
      >
        <IntegrationsCardGroup cards={integrations} />
      </SectionTemplate>
      <SectionTemplate {...projectsAndToolsInfo} size="md" bgColor="#161A1F">
        <ProjectsAndTools cards={projectsAndTools} />
      </SectionTemplate>
      <SectionTemplate
        {...resourcesInfo}
        image={{
          ...ecosystemInfo.image,
          left: 0,
          ml: "-40rem",
          mt: "-6rem",
          w: "52rem",
        }}
        size="md"
        isImageBackground
      >
        <ResourcesSection cards={resources} />
      </SectionTemplate>
      <SectionTemplate {...communityInfo} preTitle="" size="sm" isCentered>
        <CommunitySection cards={community} />
      </SectionTemplate>
    </Box>
  )
}

export default EcosystemPageTemplate

export const query = graphql`
  query EcosystemPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        ecosystemInfo {
          rowReverse
          title
          highlighted
          description
          image {
            id
            relativePath
            internal {
              mediaType
            }
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
        }
        integrations {
          image {
            id
            relativePath
            internal {
              mediaType
            }
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          title
        }
        projectsAndToolsInfo {
          rowReverse
          preTitle
          title
          description
        }
        projectsAndTools {
          image {
            id
            relativePath
            internal {
              mediaType
            }
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          title
          description
          categories {
            label
          }
          date
          buttons {
            label
            url
            variant
          }
        }
        resourcesInfo {
          rowReverse
          preTitle
          title
          description
        }
        resources {
          image {
            id
            relativePath
            internal {
              mediaType
            }
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          isBigSize
          title
          description
          buttons {
            label
            url
            variant
          }
        }
        communityInfo {
          rowReverse
          title
          description
        }
        community {
          leftIcon {
            id
            relativePath
            internal {
              mediaType
            }
            svg {
              name
              attributes {
                key
                value
              }
              children {
                name
                type
                value
                attributes {
                  key
                  value
                }
              }
            }
          }
          rightIcon {
            id
            relativePath
            internal {
              mediaType
            }
            svg {
              name
              attributes {
                key
                value
              }
              children {
                name
                type
                value
                attributes {
                  key
                  value
                }
              }
            }
          }
          title
          description
          url
        }
      }
    }
  }
`
