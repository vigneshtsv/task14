import React from 'react'
import Card from './components/Card'

function App() {
  let data = [
    {
      plan:"FREE",
      price:0,
      user: "Single user",
      isUser:true,
      storage: "5GB Storage",
      isStorage:true,
      publicProjects:"unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"unlimited Private Projects",
      isPrivateProjects:false,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:false,
      SubDomain:"Free Subdomain",
      isSubDomain:false,
      reports:"Monthly Status reports",
      isReports:false
    },
    {
      plan:"PLUS",
      price:9,
      user: "5 Users",
      isUser: true,
      storage: "50GB Storage",
      isStorage: true,
      publicProjects:"unlimited public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"unlimited Private Projects",
      isPrivateProjects:true,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      SubDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status reports",
      isReports:false
    },
    {
      plan:"PRO",
      price:49,
      user: "Unlimited Users",
      isUser: true,
      storage: "150GB Storage",
      isStorage: true,
      publicProjects:"unlimited public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"unlimited Private Projects",
      isPrivateProjects:true,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      SubDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status reports",
      isReports:true
    }
  ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      
      {
        data.map((e,i)=>{
          return <Card data={e} key={i}/>
        })
      }
    
    </div>
  </div>
</section>
  </>
}


export default App