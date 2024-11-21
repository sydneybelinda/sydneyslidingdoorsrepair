"use client"
import Accordion from 'react-bootstrap/Accordion';

function RepairsAccordion() {
  return (
  
<div className="faq">
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Is it sufficient to simply repair my sliding window, or should it be replaced with a more modern and effective one?</Accordion.Header>
        <Accordion.Body>
        In most cases, the window can be repaired to work as new, and since it most probably fits in with the decor of your home, a repair is definitely the answer.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How long does a sliding window repair take? I&apos;ve got a three bedroom home with several windows in need of repair.</Accordion.Header>
        <Accordion.Body>
       <p>Because of our long experience in sliding window repairs, our technicians can work quickly and efficiently to have all your repairs done in the space of a day or even less. </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>My sliding windows are quite old now – my home was actually built in 1980. We have difficulty in opening nearly all our sliding windows now. The make a terrible, raucous sound as we move the window which tends to scrape and scratch. It seems to me that the rollers are the problem. Can you do this type of repair?</Accordion.Header>
        <Accordion.Body>
       <p>You’ve hit the nail on the head. In fact, our most common type of sliding window repair requires new rollers to be fitted. This can be done whether the windows are wooden or aluminium.</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Our lives are really being disrupted by the opening and closing of our sliding window. In my toddler&apos;s room, if we open the window, it makes so much noise it actually wakes her up. Something must be done as quickly as possible.</Accordion.Header>
        <Accordion.Body>
       <p> No doubt the window is making a loud noise because the rollers need replacement. The moving part is definitely coming into contact with the frame itself and grinding. The best option is simply to replace the rollers. This will have your window operating quietly and smoothly in no time.
        </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>t seems to me that my sliding window track is damaged as well as the rollers. Is it possible for you to repair the track as well as the rollers or do I need a replacement window?</Accordion.Header>
        <Accordion.Body>
       <p>In fact, we carry in our vans, a vast range of sliding window tracks as well as different types of rollers for different windows. It will be no problem for us to select the correct type of roller or track from those in our van.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>My kitchen sliding window is a huge problem. I spend all my time in the kitchen – cooking for my large family which gives me much pleasure. However, I need ventilation and the window is simply not opening and closing without a great effort.</Accordion.Header>
        <Accordion.Body>
       <p> We feel your pain – yes indeed – ventilation is essential in the kitchen. We will have no problem repairing your kitchen window.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Every time I close my sliding window, it makes a loud banging noise – even the neighbours can hear it. Can your repair work allow the window to operate silently?</Accordion.Header>
        <Accordion.Body>
       <p> It certainly sounds as if your window is banging loudly because you have to use great force to move it. The speed of movement tends to cause the window to bang into the frame causing the noise. We can replace the rollers on the sliding window so that it operates smoothly and silently with no banging noise at all.
        </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>Should I attempt my own sliding window repair or does it need a professional?</Accordion.Header>
        <Accordion.Body>
       <p>You could try, certainly. But chances are that you&apos;ll do more harm than good. In the long run, an expert tradesman can carry out the repair quickly, effectively and at a reasonable price.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="8">
        <Accordion.Header>I&apos;m really worried about my security. My sliding window will not lock properly when I close it. If I have the rollers replace – would that solve this security problem?</Accordion.Header>
        <Accordion.Body>
       <p>Sounds like your sliding window rollers have worn out and collapsed. This would account for the window not aligning correctly and the lock not working securely. Replacement of rollers is the answer. </p>

        </Accordion.Body>
      </Accordion.Item>

            
      <Accordion.Item eventKey="10">
        <Accordion.Header>Are there many different types of sliding window repairs?</Accordion.Header>
        <Accordion.Body>
       <p>For a start, we carry out both wooden and aluminium sliding window repairs. Obviously, the techniques vary for different types and makes of windows. The most common sliding window is made of aluminium because nearly all new homes built after 1970 used aluminium windows.</p>

        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  </div>
  );
}

export default RepairsAccordion;