import networking from '../Images/networking.jpg';
import social from '../Images/social.jpg';
import group from '../Images/group.jpg';
import financial from '../Images/financial.jpg';
import story from '../Images/story.jpg';
import tech from '../Images/tech.jpg';
import resume from '../Images/resume.jpg';
import linkedin from '../Images/linkedin.jpg';
import interviewstrat from '../Images/interviewstrat.jpg';
import negotiate from '../Images/negotiate.jpg';
import productivity from '../Images/productivity.jpg';
import jobsearch from '../Images/jobsearch.jpg';
import behavior from '../Images/behavior.jpg';

export const assignments = [
	{
		name    : 'Intro to Careers and the Tech Field',
		img     : `${tech}`,
		link    : '/dashboard/coming-soon',
		assigns : [
			{
				name     :
					'1: Use Evernote, a Google Sheet, or other organizer of your choice to start setting weekly goals for your job search.',
				complete : true
			},
			{
				name     :
					'2: Write our a paragraph describing your priorities in a company and what type of environment would be the best fit for you.',
				complete : false
			},
			{
				name     :
					"3: If you haven't already, join #career_help to get career tips from peers and be in the know about Career Coach-led office hours.",
				complete : false
			}
		]
	},
	{
		name    : 'Financial Planning and Knowing Your Worth',
		img     : `${financial}`,
		link    : '/dashboard/coming-soon',
		assigns : [
			{
				name     : `1. Complete the budgeting spreadsheet (or budgeting app/tool of your choice) and prepare a paragraph to discuss with your PM and group what you learned about your current or goal 				financial habits in your end-of-sprint standup meeting (you should not share your actual budget with your PM, or any personal information that makes you uncomfortable!
							Budgeting spreadsheet:https://docs.google.com/spreadsheets/d/1Avpn9zSrcvMbWCr7FomzHRuPHGAOTnc3tZ_x7nwNb2c/edit?usp=sharing`,
				complete : false
			},

			{
				name     : `2. Research 5 job titles that you are interested in and would be qualified for.Research the average salary and standard benefits for these roles.Document the high end and low end for these roles, your non- negotiables(benefits), and your walk - away figure for each title.`,
				complete : false
			}
		]
	},
	{
		name    : 'Team Dynamics and Feedback: success working in a group',
		img     : `${group}`,
		link    : '/dashboard/coming-soon',
		assigns : [
			{
				name     : `1. Take a Myers Briggs-type test by Friday, and do some research into your personality type. Submit your personality type along with a paragraph answering the following to your PM on Friday:
				- How did your test results compare to your understanding of yourself ?
				- Do you disagree with any aspects of your quiz results?
				- How can you use this information(or your own previous understanding of your personality and work ethic) to influence how you work in teams with others ?
				- Take the quiz for free here: http://www.humanmetrics.com/cgi-win/jtypes2.asp
				- Start learning more about your personality type here: https://www.typefinder.com/view/types-workplace`,
				complete : false
			},

			{
				name     : `2. Deliver direct feedback to at least one colleague, instructor, or your PM in the coming weeks; note that this does not need to happen before Friday, since it should not be forced, but make it a priority over the next week or two.
				- Use the feedback guide to help you craft your feedback: https://docs.google.com/document/d/1vviZFnVPTBWDMcX90VV5UZqPaA8piVAC6c0zHfc-cZQ/edit?usp=sharing
				- Remember that your feedback should be balanced, relevant, timely, and thoughtful.
				- Without sharing the individual’s name, submit a summary of the feedback that you delivered and the result of the conversation to your PM
					- Make delivering feedback a regular part of your day - you will be doing a huge favor for those around you!"`,
				complete : false
			}
		]
	},
	{
		name    : 'Social Media in Tech',
		img     : `${social}`,
		link    : '/dashboard/cold-outreach',
		assigns : [
			{
				name     : `1. Groom your Twitter, Facebook, Instagram, or any other public social media profiles:
				- Remove any photos or posts that contain content that you would not want a potential employer to see. This may include profanity, criminal activity, heavy drinking/drug use, and discriminatory comments, but also could be more professional topics like badmouthing a previous employer
				- If you really want to keep these profiles, change your display name, photo, and personal information (keep in mind that archives may still show up in a google search). Make these accounts private. (Facebook, as a rule of thumb, should always be private!`,
				complete : false
			},

			{
				name     : `2. Update or create professional social media profiles:* Once you’ve cleaned up your social media, update your profile to reflect the professional brand you want people to see when they find you online. This is especially important for Twitter!
				- Have a professional headshot
				- Follow companies and industry leaders
				- Aim for 80% of your content to be tech/career-related. If you are new to Twitter, then make it a priority to spend ~10 minutes a day to share updates or awesome content you find. Don’t just retweet others!
					- Consider using Twitter as a way to document your learning journey with Lambda School; daily / weekly updates on the skills you’re building and projects you’re creating are a great way to show your enthusiasm in the field.`,
				complete : false
			},

			{
				name     : `3. Google yourself in an incognito window: What do you find ? You might have to dig a little bit if you have a more common name, but try to see what comes up.
				- If you recently cleaned up your social media / changed your display name and photo, but you can still find content in a simple google search that you don’t want employers to see, consider deleting those accounts and / or using a professional nickname on your professional accounts and job applications.`,
				complete : false
			},

			{
				name     : `4. Once you have done the above, submit to your PM with this week’s retrospective:
				- Links to any of your public social media profiles
				- A 4-5 sentence paragraph reviewing the following: how much did you have to remove (if anything?) What are you going to do moving forward to ensure your social media is professional/tech-focused? Did anything surprise you when you searched for yourself?`,
				complete : false
			}
		]
	},
	{
		name    : 'LinkedIn',
		img     : `${linkedin}`,
		link    : '/dashboard/cold-outreach',
		assigns : [
			{
				name     : `For this week’s assignment, please update your LinkedIn profile according to the checklist and submit profile link to your PM with your sprint retrospective
				- LinkedIn checklist here: https://drive.google.com/file/d/1B01yrV21Fk8VkXEM81CA6f5RFUHEXXIR/view?usp=sharing 
				- LinkedIn expectations here: https://docs.google.com/document/d/1mwoc-fy-ucYOCgOMYClmyUFB7ucHiGAW4jRTMt1cbGM/edit?usp=sharing`,
				complete : false
			},

			{
				name     : `We’ll covering networking more in the next lesson, but if you want to get a head start on connecting with people, use the outreach templates below and topics covered today to start reaching out to people!
				- LinkedIn outreach in 300 characters or less: 
				https://docs.google.com/document/d/1HLfnzpXFY3vn1UzBEhE1g7pNnEzNZIfS2Dw6b3FORj8/edit?usp=sharing 
				- Longer outreach templates:
				https://docs.google.com/document/d/1owl_mvOeXt08TfEQlfYGimRzQ9QIDLY1ewBgK7SHC5I/edit?usp=sharing`,
				complete : true
			}
		]
	},
	{
		name    : 'Networking Strategies',
		img     : `${networking}`,
		link    : '/dashboard/cold-outreach',
		assigns : [
			{
				name : `If you want more guidance on cold outreach, please also watch Jeff Henriod’s presentation on this topic. Jeff is Director of Partnerships at Lambda School, so he does this a lot! Recording here (watch first 30 minutes, the rest is optional):  https://youtu.be/2uqgQ3i1EEU

			    FOR FRIDAY, please complete the following:`
			},
			{
				name     : `1. Send at least 5 cold outreach messages to someone on LinkedIn(or via email if you have their email addresses)
				- Links to templates and resources to get you started are in thread
				- Submit screenshots of your outreach messages to your TL on Friday`,
				complete : false
			},

			{
				name     : `2. Identify three upcoming networking events that you can attend over the next month or two.If you live in an area without many events like this, then instead join three online groups relevant to your field and interests and post an introduction.
				- Links to templates and resources to get you started are in thread
				- Submit screenshots of your event RSVPs or your group posts to your TL on Friday.`,
				complete : false
			}
		]
	},
	{
		name    : 'Portfolios and Artifacts',
		img     : `${productivity}`,
		link    : '/dashboard/coming-soon',
		assigns : [
			{
				name : `For this week, please update your portfolio!`
			},
			{
				name     : `- Make sure that any Build Week projects are included, along with all other items on the portfolio/ artifacts checklist for your track`,
				complete : false
			},
			{
				name     : `- Your portfolio doesn’t have to be a finished version, but should be something you would feel confident showing to someone in the field`,
				complete : false
			},
			{
				name     : ` - This means proofread for typos / readability, have a clean layout, represents “you” (has some unique flair)`,
				complete : false
			},
			{
				name     : `	- If your portfolio is already up to date, post in your cohort or sprint channel to find another peer who is also done, and swap materials to offer feedback to one another`,
				complete : false
			},
			{ name: `	- Link to your portfolio with your sprint retrospective`, complete: false }
		]
	},
	{
		name    : 'Sharing Your Story',
		img     : `${story}`,
		link    : '/dashboard/coming-soon',
		assigns : [
			{ name: `Create a resume draft including the following:` },
			{ name: `- All sections: Name / contact info, Summary(optional), Projects, Skills, Experience, Education` },
			{ name: `- Power statements: in the experience and projects section of your resume` },
			{
				name : `- Formatting: formatting should be clean and consistent.For this first draft, feel free to do a more traditional format, but you can have fun with it if you want to by using Creddle!`
			},

			{ name: `Submit your resume draft to your PM with your next sprint retrospective"` }
		]
	}
	// {
	// 	name    : 'Intro to Resumes',
	// 	img     : `${resume}`,
	// 	link    : '/dashboard/coming-soon',
	// 	assigns : [ 'Do Things', 'Do Stuff', 'Do More' ]
	// },
	// {
	// 	name    : 'Behavioral Interviewing and Star Stories',
	// 	img     : `${behavior}`,
	// 	link    : '/dashboard/coming-soon',
	// 	assigns : [ 'Do Things', 'Do Stuff', 'Do More' ]
	// },
	// {
	// 	name    : 'Interview Etiquette and Strategies',
	// 	img     : `${interviewstrat}`,
	// 	link    : '/dashboard/coming-soon',
	// 	assigns : [ 'Do Things', 'Do Stuff', 'Do More' ]
	// },
	// {
	// 	name    : `Offer, Negotiations, NDA's`,
	// 	img     : `${negotiate}`,
	// 	link    : '/dashboard/coming-soon',
	// 	assigns : [ 'Do Things', 'Do Stuff', 'Do More' ]
	// },
	// {
	// 	name    : 'Job Search Strategy',
	// 	img     : `${jobsearch}`,
	// 	link    : '/dashboard/coming-soon',
	// 	assigns : [ 'Do Things', 'Do Stuff', 'Do More' ]
	// }
];
