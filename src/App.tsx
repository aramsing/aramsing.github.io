import './App.css'

export default function App() {
  return (
    <>
      <h2>Hi, I'm Arjun Ramsinghani</h2>
      <img src="/1707169444707.jpg" alt="Arjun Ramsinghani at the Texas Tech Engineering Job Fair"/>
      <p>Welcome to my website! I am a Software Engineer at USAA.</p>

        <h5>Pages I want to make</h5>
        <ul style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <li>Education</li>
            <li>Work</li>
            <li>About (outside work)</li>
        </ul>


        <h5>Technical things I want to do:</h5>
        <ul style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <li>Convert to React</li>
            <li>Showcase some prior projects</li>
            <li>The goal for this website is to act a a complementary portfolio to my already existing resume</li>
        </ul>
    </>
  )
}
