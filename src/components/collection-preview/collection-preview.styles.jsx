import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const TitleContainer = styled(Link)`
    font-size: 28px;
    margin-bottom: 25px;
    width:100px;
    padding: 0 10px;
`

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`