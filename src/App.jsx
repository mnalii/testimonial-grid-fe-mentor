import GlobalStyles from './components/GlobalStyles';
import Container from './components/Container';
import Grid from './components/Grid';
import GridItem from './components/GridItem';
import Card from './components/Card';
import QuoteImg from './components/QuoteImg';
import TestimoniDescription from './components/TestimoniDescription';
import TestimoniText from './components/TestimoniText';

import QuoteImgSrc from './assets/bg-pattern-quotation.svg';
import Img1 from './assets/image-daniel.jpg';
import Img2 from './assets/image-jonathan.jpg';
import Img3 from './assets/image-kira.jpg';
import Img4 from './assets/image-jeanette.jpg';
import Img5 from './assets/image-patrick.jpg';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Grid $gridGaps={6} $rows={{ md: 2 }} $columns={{ md: 4 }}>
          <GridItem
            $columns={{ md: 2 }}
            style={{ position: 'relative', color: 'hsl(210, 46%, 95%)' }}
          >
            <QuoteImg src={QuoteImgSrc} />

            <Card style={{ backgroundColor: 'hsl(263, 55%, 52%)' }}>
              <Card.Header>
                <Card.Avatar src={Img1} />
                <Card.UserInfo>
                  <Card.UserName>Daniel Clifford</Card.UserName>
                  <Card.UserStatus>Verified Graduate</Card.UserStatus>
                </Card.UserInfo>
              </Card.Header>

              <TestimoniDescription
                style={{ position: 'relative', zIndex: '10' }}
              >
                I received a job offer mid-course, and the subjects I learned
                were current, if not more so, in the company I joined. I
                honestly feel I got every penny worth. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Maxime ea aspernatur velit
                similique, impedit nobis! Repudiandae tempore aperiam quod eos
                veniam adipisci vero, earum soluta nulla minus molestias
                necessitatibus enim libero recusandae alias inventore quo magni
                fuga voluptates ad nemo laborum. Atque magni in repudiandae
                neque inventore nihil minus architecto.
              </TestimoniDescription>

              <TestimoniText>
                &ldquo;I was an EMT for many years before I joined the bootcamp.
                I&apos;ve been looking to make a transition and have heard some
                people who had an amazing experience here. I signed up for the
                free intro course and found it incredibly fun! I enrolled
                shortly thereafter. The next 12 weeks was the best - and most
                grueling - time of my life. Since completing the course,
                I&apos;ve successfully switched careers, working as a Software
                Engineer at a VR startup. Lorem ipsum dolor sit amet
                consectetur&rdquo;
              </TestimoniText>
            </Card>
          </GridItem>
          <GridItem style={{ color: 'hsl(210, 46%, 95%)' }}>
            <Card
              style={{ backgroundColor: 'hsl(217, 19%, 35%)', height: '100%' }}
            >
              <Card.Header>
                <Card.Avatar src={Img2} />
                <Card.UserInfo>
                  <Card.UserName>Jonathan Walters</Card.UserName>
                  <Card.UserStatus>Verified Graduate</Card.UserStatus>
                </Card.UserInfo>
              </Card.Header>
              <TestimoniDescription>
                The team was very supportive and keep me motivated
              </TestimoniDescription>

              <TestimoniText>
                &ldquo;I was an EMT for many years before I joined the bootcamp.
                I&apos;ve been looking to make a transition and have heard some
                people who had an&rdquo;
              </TestimoniText>
            </Card>
          </GridItem>
          <GridItem
            $rowSpan={{ md: 2 }}
            $rowStart={{ sm: 6, md: 1 }}
            $colStart={{ md: 4 }}
          >
            <Card style={{ height: '100%' }}>
              <Card.Header>
                <Card.Avatar src={Img3} />
                <Card.UserInfo>
                  <Card.UserName>Kira Whittle</Card.UserName>
                  <Card.UserStatus>Verified Graduate</Card.UserStatus>
                </Card.UserInfo>
              </Card.Header>
              <TestimoniDescription>
                Such a life-changing experience. Highly recommended!
              </TestimoniDescription>

              <TestimoniText>
                &ldquo;Before joining the bootcamp, I’ve never written a line of
                code. I needed some structure from professionals who can help me
                learn programming step by step. I was encouraged to enroll by a
                former student of theirs who can only say wonderful things about
                the program. The entire curriculum and staff did not disappoint.
                They were very hands-on and I never had to wait long for
                assistance. The agile team project, in particular, was
                outstanding. It took my learning to the next level in a way that
                no tutorial could ever have. In fact, I’ve often referred to it
                during interviews as an example of my developent experience. It
                certainly helped me land a job as a full-stack developer after
                receiving multiple offers. 100% recommend!&rdquo;
              </TestimoniText>
            </Card>
          </GridItem>

          <GridItem>
            <Card style={{ height: '100%' }}>
              <Card.Header>
                <Card.Avatar src={Img4} />
                <Card.UserInfo>
                  <Card.UserName>Jeanette Harmon</Card.UserName>
                  <Card.UserStatus>Verified Graduate</Card.UserStatus>
                </Card.UserInfo>
              </Card.Header>
              <TestimoniDescription>
                An overall wonderful and rewarding experience
              </TestimoniDescription>

              <TestimoniText>
                &ldquo;Thank you for the wonderful experience! I now have a job
                I really enjoy, and make a good living while doing something I
                love.&rdquo;
              </TestimoniText>
            </Card>
          </GridItem>

          <GridItem
            $columns={{ md: 2 }}
            style={{ color: 'hsl(210, 46%, 95%)' }}
          >
            <Card style={{ backgroundColor: 'hsl(219, 29%, 14%)' }}>
              <Card.Header>
                <Card.Avatar src={Img5} />
                <Card.UserInfo>
                  <Card.UserName>Patrick Abrams</Card.UserName>
                  <Card.UserStatus>Verified Graduate</Card.UserStatus>
                </Card.UserInfo>
              </Card.Header>

              <TestimoniDescription
                style={{ position: 'relative', zIndex: '10' }}
              >
                Awesome teaching support from TAs who did the bootcamp
                themselves. Getting guidance from them and learning from their
                experiences was easy.
              </TestimoniDescription>

              <TestimoniText>
                &ldquo;The staff seem genuinely concerned about my progress
                which I find really refreshing. The program gave me the
                confidence necessary to be able to go out in the world and
                present myself as a capable junior developer. The standard is
                above the rest. You will get the personal attention you need
                from an incredible community of smart and amazing people.&rdquo;
              </TestimoniText>
            </Card>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

export default App;
