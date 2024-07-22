import { BackgroundGradient } from "@/components/audio-motion/SpeechListen";
import VideoComponent from "@/components/audio-motion/VectorMotion";
import InterviewPractice from "@/components/InterviewPractice/InterviewPractice";
import IntroduceYourself from "@/components/IntroduceYourself/IntroduceYourself";
import LandingPage from "@/components/LandingPage/LandingPage";
import Feedback from "@/components/result/feedback";

export default function Home() {
  return (
    <><LandingPage /><IntroduceYourself /><Feedback/><VideoComponent/><InterviewPractice userName={""}/></>
  );
}
