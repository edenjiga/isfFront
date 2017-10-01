const url = 'https://api.cebroker.com/v2/';
const featuredUrl = url + 'featuredCoursesProfession?profession=36';
const coursesUrl = url + 'search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27';

export let GLOBAL = {
    url: url,
    featuredUrl: featuredUrl,
    coursesUrl: coursesUrl
};
