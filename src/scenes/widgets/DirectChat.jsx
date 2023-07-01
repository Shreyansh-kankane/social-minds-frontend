// import React, { useState } from 'react'

// import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

// const DirectChatPage = () => {
// 	const [username, setUsername] = useState('')

// 	function createDirectChat(creds) {
// 		getOrCreateChat(
// 			creds,
// 			{ is_direct_chat: true, usernames: [username] },
// 			() => setUsername('')
// 		)
// 	}

// 	function renderChatForm(creds) {
// 		return (
// 			<div>
// 				<input 
// 					placeholder='Username' 
// 					value={username} 
// 					onChange={(e) => setUsername(e.target.value)} 
// 				/>
// 				<button onClick={() => createDirectChat(creds)}>
// 					Create
// 				</button>
// 			</div>
// 		)
// 	}

// 	return (
// 		<ChatEngine
// 			height='100vh'
// 			userName='test2'
// 			userSecret='test2'
// 			projectID='256ce9d0-b8ea-4005-ade9-371a705e0c49'
// 			renderNewChatForm={(creds) => renderChatForm(creds)}
// 		/>
// 	)
// }

// export default DirectChatPage;