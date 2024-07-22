import InterviewPractice from "@/components/InterviewPractice/InterviewPractice";
import IntroduceYourself from "@/components/IntroduceYourself/IntroduceYourself";
import LandingPage from "@/components/LandingPage/LandingPage";
import Feedback from "@/components/result/feedback";

export default function Home() {
  return (
    <><LandingPage /><IntroduceYourself /><Feedback/><InterviewPractice userName={""}/></>
  );
}
