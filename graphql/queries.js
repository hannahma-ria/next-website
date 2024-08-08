//apollo client lets you talk to the graphql server
//the gql function imported from apollo client defines a graphql query
import { gql } from '@apollo/client';

//gets the data of all projects in Strapi
//meant for projects page, so no IS data until needed for indiv. project page
const GET_PROJECTS = gql `
    query {
        projects {
            data {
            id,
            attributes {
                title,
                cover_photo,
                description,
                grades
                }
            }
        }
    }
` ;

//String! means field is non-nullable. GraphQL will always send that data back
//gets a single project's data based on id passed
const GET_A_PROJECT = gql `
    query ($id = String!) {
        projects {
            data {
               id,
               attributes {
                   title,
                   cover_photo,
                   description,
                   grades
                   investigation_stations {
                        data {
                            id,
                            attributes {
                                title
                            }
                        }
                   }
                }
            }
        }
    }
` ;

//allows these queries to be imported into other files
export { GET_PROJECTS, GET_A_PROJECT } ;