# GraphQL Playground

## What is GraphQL?  
Yeah, I'm not sure either.  But let's try and find out by making something that does a thing.

## References
Following along with the _official_ getting started docs at https://graphql.org/graphql-js/running-an-express-graphql-server/ to try and learn what all the fuss is about. 

## Graphiql Examples
Examples of the queries and mutations that are being worked on.

### Queries

Query residents
```
query {
  resident {
    list{
      name,
      id,
      description {
        animal
        personality
      }
    }
  }
}
```

### Mutations

Create a new resident
```
mutation createResident {
  resident {
    create(input: {
      name: "Test", 
      avatar: "bear", 
      notes: [], 
      description: {
        personality: "test", 
        animal: "yar"
      }
    }) {
      id,
      name
    }
  }
}

```