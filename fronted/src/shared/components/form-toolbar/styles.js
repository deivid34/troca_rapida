import styled from 'styled-components'

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 4px;

  border-radius: 8px;

  background: ${({ theme }) => theme.primary_light};

  margin-bottom: 8px;
`

export const ActionButtonContainer = styled.div`
  display: flex;

  > button {
    width: 100px;
    margin-right: 6px;
    margin-top: 4px;
    height: 40px;

    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.contrast};
  }
`

export const EndButtonContainer = styled.div`
  display: flex;

  > button {
    width: 100px;
    height: 40px;
    margin-right: 6px;
    margin-top: 4px;

    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.contrast};
  }
`
