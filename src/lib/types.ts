export type TSocial = 'FACEBOOK' | 'GOOGLE' | 'KAKAOTALK' | 'APPLE';
export type TSubject = {
  en: string;
  ko: string;
  ja: string;
  zh: string;
  es: string;
  hi: string;
  th: string;
  vi: string;
};

//
export type TLangDomainFullInitcap =
  | 'English'
  | 'Espanol'
  | 'Korean'
  | 'Japanese'
  | 'Chinese'
  | 'Vietnamese'
  | 'Hindi'
  | 'Thai';
export type TLangDomainFullUpper =
  | 'ENGLISH'
  | 'ESPANOL'
  | 'KOREAN'
  | 'JAPANESE'
  | 'CHINESE'
  | 'VIETNAMESE'
  | 'HINDI'
  | 'THAI';
export type TLangDomainFullLower =
  | 'english'
  | 'espanol'
  | 'korean'
  | 'japanese'
  | 'chinese'
  | 'vietnamese'
  | 'hindi'
  | 'thai';
export type TLangDomainShortUpper =
  | 'EN'
  | 'ES'
  | 'KO'
  | 'JA'
  | 'ZH'
  | 'HI'
  | 'VI'
  | 'TH';
export type TLangDomainShortLower =
  | 'en'
  | 'es'
  | 'ko'
  | 'ja'
  | 'zh'
  | 'vi'
  | 'hi'
  | 'th';
export type TLang = {
  name: string;
  img: any;
  value: TLangDomainShortUpper;
};

export type TQueryAlias = 'config' | 'login';
export type TLazyQueryAlias =
  | 'check'
  | 'loginEmail'
  | 'loginSocial'
  | 'me'
  | 'reviews'
  | 'review'
  | 'wordLevels'
  | 'speakLevels'
  | 'wordChapters'
  | 'speakChapters'
  | 'main'
  | 'comment'
  | 'faq'
  | 'notice'
  | 'viewHistory';
export type TMutationAlias =
  | 'signup'
  | 'writeReview'
  | 'qna'
  | 'password'
  | 'image'
  | 'like'
  | 'reviewDelete'
  | 'reviewHide'
  | 'reviewBlock'
  | 'reviewReport'
  | 'commentWrite'
  | 'subtitle'
  | 'language'
  | 'finishWord'
  | 'finishSpeak'
  | 'finishLearn'
  | 'purchase';
export type TVariableOption = {
  required?: boolean;
  name?: string;
  type?: string;
  value?: string;
};
export type TVariableOptions = {
  id?: TVariableOption;
  pw?: TVariableOption;
  loginType?: TVariableOption;
  loginKey?: TVariableOption;
  loginData?: TVariableOption;
  country?: TVariableOption;
};

// Reponse

export type GQLResponse = {
  getPurchased: TViewHistory[];
  getCoinList: THistory[];
  getFAQ: TFAQ[];
  getNotice: TNotice[];
  getConfig: {
    getPrivacy: string;
    getService: string;
    getMarket: string;
    getPointForWord: number;
    getPointForSpeak: number;
    getADPoint: number;
    getChapterCountForST: number;
    getChapterCountForWT: number;
  };
  checkDuplicate?: boolean;
  getLogin?: string | undefined;
  getMe?: TMe;
  getLive: TReview[];
  getLiveDetail: TReviewDetail;
  getWordTraining: TWordTraining;
  getSpeakTraining: TSpeakTraining;
  getMainData: {
    purchaseImage: string;
    speakData: TSpeakLesson;
    wordData: TWordLesson;
  };
};
export type TMe = {
  email: string;
  name: string;
  img: string;
  myIndexCode: string;
  memberId: string;
  membership: TMembership[];
  totalLearn: number;
  totalSpoken: number;
  totalTest: number;
  subtitle: TLangDomainFullInitcap;
  language: TLangDomainFullInitcap;
  coin: number;
};
export type TMembership = {
  boughtItem: string;
  startDatetime: string;
  endDatetime: string;
  language: string;
};
export type TReview = {
  idx: number;
  subject: string;
  content: string;
  isNew?: boolean;
  pics: string[];
  writer: TWriter;
  view: number;
  recommend: number;
  isLiked: boolean;
  registDatetime: string;
  commentCount: number;
};
export type TReviewDetail = {
  idx: number;
  subject: string;
  content: string;
  pics: string[];
  writer: TWriter;
  view: number;
  recommend: number;
  isLiked: boolean;
  registDatetime: string;
  comment: TComment[];
};
export type TWriter = {
  memberId: string;
  name: string;
  img: string;
};
export type TComment = {
  idx: number;
  content: string;
  depth: number;
  registDatetime: string;
  writer: TWriter;
  isLiked: boolean;
  recommend?: number;
};

// Word??? ??? ??????
export type TWordTraining = {
  num: number;
  progress: string;
  allCount: TWordProblem[];
  lesson: TWordLesson[];
};
export type TWordLesson = {
  idx: number;
  subject: TSubject;
  problem: TWordProblem[];
  isTested: boolean;
  chapter: number;
};

// Word ????????? ??????
export type TWordProblem = {
  playURL: string;
  datas: {
    en?: TProblem;
    ko?: TProblem;
    ja?: TProblem;
    ch?: TProblem;
    es?: TProblem;
    hi?: TProblem;
    th?: TProblem;
    vi?: TProblem;
  };
};
// Word ?????? (Atomic)
export type TProblem = {
  clickWord: string[];
  answer: string;
  problem: string;
};

export type TSpeakTraining = {
  num: number;
  progress: string;
  allCount: number;
  lesson: TSpeakLesson[];
};
export type TSpeakLesson = {
  idx: number;
  subject: TSubject;
  isTested: boolean;
  isLearn: boolean;
  learnDatas: TLearn[];
  speakDatas: TSpeak[];
  chapter?: number;
};
export type TLearn = {
  display: string;
  subtitle: TSubject;
  playURL: string;
};
export type TSpeak = {
  subject: TSubject;
  description: TSubject;
  pic: string;
  duration: string; //????????? ??? ??????
  playSample: string; //???????????? ????????? URL
  introSubtitle: TSubject; //????????? ????????? ??? ?????? ????????? ????????? URL
  successSubtitle: TSubject; //????????? ????????? ????????? ????????? URL
  failSubtitle: TSubject; //????????? ????????? ????????? ????????? URL
  introURL: string; //????????? ????????? ??????
  readyURL: string; //???????????? ????????? ??????
  successURL: string; //????????? ????????? ??????
  failURL: string; //????????? ????????? ??????
  problem: TSubject;
  answerWithSub: TSubject;
  answer: string;
};

export type THistory = {
  point: number;
  registDatetime: string;
};
export type TFAQ = {
  subject: string;
  content: string;
};
export type TNotice = {
  subject: string;
  content: string;
  isNew: boolean;
};
export type TViewHistory = {
  kind: 'Word' | 'Speak';
  speakData?: TSpeakLesson;
  wordData?: TWordLesson;
  time: string;
};

// Navigation

export type TRootStackParams = {
  SignUpAgreement: {socialMethod: TSocial} | undefined;
  SignUp: {
    agreeMarketing: boolean;
  };
  SignInHome: undefined;
  SignIn: undefined;
  Forgot: undefined;
  MainTab: undefined;
  Term: {type: 'term' | 'privacy'};
  SelectSubtitle: undefined;
  MyReviewList: {isMe: boolean};
  MyReviewDetail: {reviewIdx: number};
  MyReviewWrite: undefined;
};
export type TReviewStackParams = {
  reviewList: {searchId: string};
  reviewDetail: {reviewIdx: number};
  reviewWrite: undefined;
  reviewModify: {reviewData: TReviewDetail};
  reviewComment: {postId: number; re?: number; modifyIdx?: number};
  MyReviewDetail: {reviewIdx: number};
  MyReviewWrite: undefined;
  MyReviewModify: {reviewData: TReviewDetail};
  MyReviewComment: {postId: number; re?: number; modifyIdx?: number};
};
export type TMainStackParams = {
  Main: undefined;
  myMenu: undefined;
  myLanguage: undefined;
  qna: undefined;
  store: undefined;
  viewHistory: undefined;
};
export type TWordStackParams = {
  wordList: undefined;
  ad: {wordData: TWordLesson};
  wordStudy: {wordData: TWordLesson};
};
export type TSpeakStackParams = {
  speakList: undefined;
  adLearn: {learnData: TLearn[]; chapterIdx: number};
  adSpeak: {chapterData: TSpeakLesson};
  learn: {learnData: TLearn[]; chapterIdx: number};
  speakGateway: {
    chapterData: TSpeakLesson;
  };
  speakStudy: {
    chapterData: TSpeakLesson;
  };
};
// type ScreenList = 'SignUp'
// export type TStackProps<ScreenList> = StackScreenProps<TRootStackParams, ScreenList>;

export type TSpend = 'word' | 'speak';
