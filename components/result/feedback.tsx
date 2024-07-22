import { JSX, SVGProps } from "react"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LeFmTxvMW82
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Feedback() {
  return (
    <div className="bg-black py-20">
    <div className="max-w-[768px] mt-4 mx-auto">
      <div className="flex flex-col gap-8 w-full py-12 px-4 md:px-6 bg-black text-zinc-50">
        <div className="flex flex-col justify-center bg-card rounded-lg space-y-4">
          <div className="flex flex-col items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Interview Results</h2>
              <p className="text-muted-foreground">Great job on your interview! Here's represent of your performance.</p>
            </div>
            <div className="max-w-[768px] mx-auto py-4">
              <img 
                src="../image/crocodile.jpg" 
                alt="Description of image" 
                className="w-[768px] h-[400px] object-cover rounded-lg shadow-lg"/>
                <div className="px-4 py-3 my-3 border rounded-lg border-zinc-700">
                  <p className="mb-2 font-semibold">Description:</p>
                  <p className="font-light">You are an ambitious worker. Always accept challenges with enthusiasm from your boss. Always give a smile to everyone. But don't be fake with yourself. Believe with your ability and capability.</p>
                </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 py-4">
            <p className="text-muted-foreground text-zinc-400">Total Question</p>
            <p className="text-4xl font-semibold">15</p>
          </div>
          <div className="space-y-2 py-4">
            <p className="text-muted-foreground text-zinc-400">Your Score</p>
            <p className="text-4xl font-semibold">80</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground mb-2 text-zinc-400">Areas for Improvement</p>
            <ul className="space-y-2 text-sm">
              <li>
                <TriangleAlertIcon className="w-4 h-4 mr-2 inline-block text-muted-foreground" />
                Technical knowledge
              </li>
              <li>
                <TriangleAlertIcon className="w-4 h-4 mr-2 inline-block text-muted-foreground" />
                Communication skills
              </li>
            </ul>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground mb-2 text-zinc-400">Strengths</p>
            <ul className="space-y-2 text-sm">
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                Problem-solving
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                Teamwork
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-4 bg-black text-zinc-50">
        <div className="bg-card rounded-lg p-6">
          <div className="flex  flex-col items-start justify-between">
          <div className="bg-muted py-1 rounded-full text-sm font-medium text-muted-foreground">QUESTION 1</div>
            <h3 className="text-lg font-medium">Tell me about a time you had to deal with a difficult coworker.</h3>
          </div>
          <div className="mt-4 space-y-2 text-zinc-400">
            <p>
              I once had a coworker who was very critical of my work and often undermined me in meetings. I tried to have an open and honest conversation with them to understand their concerns, and we were able to come to a compromise that allowed us to work more effectively together.
            </p>
            <div className="bg-muted rounded-lg py-4 text-muted-foreground">
              <p className="font-medium mb-2 text-zinc-50">Feedback:</p>
              <p>
                Great job handling the difficult situation with your coworker. Communicating openly and finding a compromise is an effective way to resolve conflicts in the workplace. You demonstrated strong interpersonal skills and a willingness to work collaboratively.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-lg p-6">
          <div className="flex flex-col items-start justify-between">
          <div className="bg-muted py-1 rounded-full text-sm font-medium text-muted-foreground">QUESTION 2</div>
            <h3 className="text-lg font-medium">Describe a time when you had to learn a new skill quickly.</h3>
          </div>
          <div className="mt-4 space-y-2 text-zinc-400">
            <p>
              When I first started my current role, I was asked to take on a project that required me to learn a new software tool. I spent several evenings watching tutorial videos and practicing with the tool, and I was able to become proficient in it within a couple of weeks. The project was a success, and I was able to demonstrate my adaptability and willingness to learn new skills.
            </p>
            <div className="bg-muted rounded-lg py-4 text-muted-foreground">
              <p className="font-medium mb-2 text-zinc-50">Feedback:</p>
              <p>
                Excellent job demonstrating your ability to quickly learn a new skill. Your proactive approach of watching tutorials and practicing on your own time shows a strong commitment to professional development. This type of adaptability is highly valued in the workplace.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-lg p-6">
          <div className="flex flex-col items-start justify-between">
          <div className="bg-muted py-1 rounded-full text-sm font-medium text-muted-foreground">QUESTION 3</div>
            <h3 className="text-lg font-medium">
              How would you handle a situation where a client was unhappy with your work?
            </h3>
          </div>
          <div className="mt-4 space-y-2 text-zinc-400">
            <p>
              If a client was unhappy with my work, I would first try to understand their specific concerns and what they were hoping to achieve. I would then work with them to identify the root cause of the issue and propose a plan to address it. My goal would be to find a solution that meets their needs while maintaining the quality of the work. I would also be sure to follow up with the client to ensure they are satisfied with the outcome.
            </p>
            <div className="bg-muted rounded-lg py-4 text-muted-foreground">
              <p className="font-medium mb-2 text-zinc-50">Feedback:</p>
              <p>
                Your approach to handling an unhappy client is excellent. Taking the time to understand their concerns, identifying the root cause, and proposing a solution that meets their needs demonstrates strong problem-solving and customer service skills. Following up to ensure their satisfaction is also a great way to build trust and maintain a positive relationship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

  
  function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }
  
  
  function TriangleAlertIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    )
  }
  
  
  function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }