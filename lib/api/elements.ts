import fetchAPI from '@api/fetchAPI'

export async function getElements() {
  const data = await fetchAPI(`query Elements {
    elements {
    }
  }`)
  return data.elements
}

export async function getElement(id: any) {
  const data = await fetchAPI(`query Element($id: ID!) {
    element(id: $id) {
      title
    }
  }`,
  {
    variables: {
      id
    }
  })
  return data.element
}

export async function getAllElementsIds() {
  const data = await fetchAPI(`query Elements {
    elements {
      id
    }
  }`)
  return data.elements.map(({id}) => {
    return {
      params: {
        id
      }
    }
  })
}