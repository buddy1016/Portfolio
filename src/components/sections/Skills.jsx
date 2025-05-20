// import { Download, Mail, MapPin, Phone } from "lucide-react"

function Skills() {
    return (
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Skills</h1>
          </div>
        </div>
  
  
        <div>
          <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">* Programming / Markup Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            <ToolIcon name="C" icon={<i className="devicon-c-plain colored text-3xl"></i>} />
            <ToolIcon name="PHP" icon={<i className="devicon-php-plain colored text-3xl"></i>} />
            <ToolIcon name="Java" icon={<i className="devicon-java-plain colored text-3xl"></i>} />
            <ToolIcon name="Python" icon={<i className="devicon-python-plain colored text-3xl"></i>} />
            <ToolIcon name="JavaScript" icon={<i className="devicon-javascript-plain colored text-3xl"></i>} />
            <ToolIcon name="Rust" icon={<i className="devicon-rust-plain colored text-3xl"></i>} />
            <ToolIcon name="HTML" icon={<i className="devicon-html5-plain colored text-3xl"></i>} />
            <ToolIcon name="CSS" icon={<i className="devicon-css3-plain colored text-3xl"></i>} />
            <ToolIcon name="TypeScript" icon={<i className="devicon-typescript-plain colored text-3xl"></i>} />
            <ToolIcon name="Ruby" icon={<i className="devicon-ruby-plain colored text-3xl"></i>} />
            <ToolIcon name="Dart" icon={<i className="devicon-dart-plain colored text-3xl"></i>} />
            <ToolIcon name="Go" icon={<i className="devicon-go-plain colored text-3xl"></i>} />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">* Databases</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            <ToolIcon name="MongoDB" icon={<i className="devicon-mongodb-plain colored text-3xl"></i>} />
            <ToolIcon name="MySql" icon={<i className="devicon-mysql-plain colored text-3xl"></i>} />
            <ToolIcon name="SQLite" icon={<i className="devicon-sqlite-plain colored text-3xl"></i>} />
            <ToolIcon name="DynamoDB" icon={<i className="devicon-dynamodb-original colored text-3xl"></i>} />
            <ToolIcon name="PostgreSQL" icon={<i className="devicon-postgresql-plain colored text-3xl"></i>} />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 border-b border-zinc-800 pb-2">* Librarys/ Frameworks/ Techs</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            <ToolIcon name="Android App Development" icon={<i className="devicon-android-plain colored text-3xl"></i>} />
            <ToolIcon name="AI" icon={<i className="devicon-tensorflow-original colored text-3xl"></i>} />
            <ToolIcon name="BlockChain" icon={<i className="devicon-bitcoin-plain colored text-3xl"></i>} />
            <ToolIcon name="VueJs" icon={<i className="devicon-vuejs-plain colored text-3xl"></i>} />
            <ToolIcon name="Laravel" icon={<i className="devicon-laravel-plain colored text-3xl"></i>} />
            <ToolIcon name="CodeIgniter" icon={<i className="devicon-codeigniter-plain colored text-3xl"></i>} />
            <ToolIcon name="Liquid" icon={<i className="devicon-shopify-plain colored text-3xl"></i>} />
            <ToolIcon name="WordPress" icon={<i className="devicon-wordpress-plain colored text-3xl"></i>} />
            <ToolIcon name="Shopify" icon={<i className="devicon-shopify-plain colored text-3xl"></i>} />
            <ToolIcon name="Docker" icon={<i className="devicon-docker-plain colored text-3xl"></i>} />
          </div>
        </div>
      </div>
    )
  }
  
  // function SkillBar({ name, percentage }) {
  //   return (
  //     <div>
  //       <div className="flex justify-between mb-1">
  //         <span>{name}</span>
  //         <span>{percentage}%</span>
  //       </div>
  //       <div className="w-full bg-zinc-800 rounded-full h-2">
  //         <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
  //       </div>
  //     </div>
  //   )
  // }
  
  function ToolIcon({ name, icon }) {
    return (
      <div className="bg-zinc-900 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center">
        <div className="mb-2">{icon}</div>
        <h4 className="text-xs sm:text-sm">{name}</h4>
      </div>
    )
  }
  
  export default Skills
  