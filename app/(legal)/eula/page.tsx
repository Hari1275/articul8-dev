import type { Metadata } from 'next';
import '../../../styles/globals.css'

export const metadata: Metadata = {
  title: 'End User License Agreement | Articul8',
  description: 'Articul8 End User License Agreement (EULA)',
};

export default function EULAPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      <h1 className="text-3xl font-bold text-center mb-4">ARTICUL8, INC.</h1>
      <h2 className="text-2xl font-semibold text-center mb-12">A8 ESSENTIAL PLATFORM END USER LICENSE AGREEMENT</h2>

      <div className="prose prose-sm max-w-none space-y-6">
        <p>
          This A8 Essential Platform End User License Agreement ("EULA") is a binding agreement between Articul8, Inc. ("Articul8" or "we") and you ("Licensee" or "you"). You, the Licensee are an individual that has entered into a Subscription (defined below) to use Articul8's generative AI and ML offering called the A8 Essential Platform (the "Platform" as further defined below), or you are an Authorized User (as defined below) of a Customer (defined below). This EULA establishes the terms under which you, as a Licensee, may access and use the Platform, and this EULA applies and is binding upon you each time you access and use the Platform.
        </p>

        <p>
          Please note that Articul8 reserves the right to modify, change, amend, update, or supplement the terms and conditions of this EULA at any time, and while we may provide you effective notice of the most recent version of this EULA on our website, Articul8 reserves the right to modify, change, amend, update, or supplement the terms and conditions of this EULA without direct notice to you. Therefore, we recommend that you review this EULA from time to time to determine if changes have been made to this EULA.
        </p>

        <p className="font-semibold">
          LICENSEE ACKNOWLEDGES IT HAS HAD THE OPPORTUNITY TO REVIEW THIS EULA PRIOR TO ACCEPTANCE OF THIS EULA. IF YOU ARE EXECUTING THIS EULA ON BEHALF OF A CORPORATE ENTITY, YOU REPRESENT THAT YOU ARE AUTHORIZED TO BIND YOUR CORPORATE ENTITY TO THIS EULA.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-8">1. DEFINITIONS</h2>

        <div className="space-y-6">
          <div className="pl-4 ">
            <p className="font-semibold">1.1 "Authorized User"</p>
            <p>means employees and contractors of a Customer that is a Licensee under this EULA, who (a) are using the Platform pursuant to such Customer's Subscription and under such Customer's supervision and responsibility, and (b) are subject to a written agreement with such Customer that includes behavioral and confidentiality restrictions that are at least as protective of Articul8 as those set forth in this EULA.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.2 "Confidential Information"</p>
            <p>means all non-public information disclosed in written, oral or visual form by either party, as a disclosing party, to the other party, as a receiving party. Confidential Information may include, but is not limited to, projects, developments, plans, research data, financial data, personnel data, computer programs, source code and object code, names and expertise of employees and consultants, know-how, and other technical, business, financial and development information, business plans, marketing plans, customer and client lists, and all other information that would appear to a reasonable person to be confidential or proprietary in the context and circumstances in which the information is being used. "Confidential Information" does not include any information that the receiving party can demonstrate by its written records (i) was rightfully known to it without obligation of confidentiality prior to its disclosure hereunder by the disclosing party; (ii) is or becomes publicly known through no wrongful act of the receiving party; (iii) has been rightfully received without obligation of confidentiality from a third party authorized to make such a disclosure; or (iv) is independently developed by the receiving party without reference to confidential information disclosed hereunder.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.3 "Customer"</p>
            <p>means a corporate entity that has obtained a Subscription for its Authorized Users to use the Platform. As a subscriber, a Customer is considered a Licensee under this EULA and is responsible and liable for the activities of its Authorized Users who access the Platform through Customer's Subscription.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.4 "Documentation"</p>
            <p>means any administration guides, user guides, and release notes that are provided by Articul8 to Licensee with the Subscription.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.5 "Effective Date"</p>
            <p>means the calendar date on which Licensee's Subscription goes into effect or becomes operable, as determined by Articul8.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.6 "Intellectual Property"</p>
            <p>means any created or developed technology, patentable subject matter, invention, process, form of matter, device, machine, software, source or object code, copyrightable work, document, written work, drawing, graphical work, created work in an electronic medium, symbol, logo, slogan, design, trademark, service mark, trade name, trade dress, trade secret, know-how, proprietary and confidential information, or any other form of creativity which takes form in a tangible medium of expression and is protected and enforceable under any Intellectual Property Rights (defined below) recognized in any jurisdiction throughout the world.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.7 "Intellectual Property Rights"</p>
            <p>means all rights of ownership or enforcement in any Intellectual Property now held or hereafter created or acquired by a party, regardless of whether arising under the laws of the United States, under the laws of any other jurisdiction throughout the world, or under any international treaty to: (i) all classes or types of patents, including, without limitation, utility models, utility patents and design patents, patent applications and disclosures, and all extensions in any jurisdiction throughout the world; (ii) all copyrights, all ancillary and sub-rights of copyright, and all moral rights in both published and unpublished works, and all corresponding registrations and applications therefor in any jurisdiction throughout the world; (iii) all trademarks and service marks and trade dress, and all corresponding registrations and applications therefor in any jurisdiction throughout the world; and (iv) all know-how, trade secrets, and confidential technical and business information created or acquired by a party.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.8 "License"</p>
            <p>means the general license granted to Licensee in this EULA to use the Platform. For clarity, the License delineated herein is a general access license that applies to all Licensees, and the License is operative as long as Licensee's Subscription is active and fully paid-up.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.9 "Licensee"</p>
            <p>means either an individual person who has obtained a Subscription, or an Authorized User of a Customer, or a Customer.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.10 "Licensee Data"</p>
            <p>means any inputs, prompts, content, information, or data owned by Licensee and input, uploaded, and used by Licensee in the Platform.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.11 "Open Source Software"</p>
            <p>means software delivered to Licensee hereunder that is subject to the provisions of any open source license agreement.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.12 "Output Data"</p>
            <p>means output generated by the Platform from Licensee Data that is input, uploaded, and/or used on the Platform.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.13 "Platform"</p>
            <p>means Articul8's A8 Essential Platform.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.14 "Platform Development"</p>
            <p>means growth, changes, and developments in the Platform made by Articul8.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.15 "Subscription"</p>
            <p>means a subscription to use the Platform.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.16 "Update"</p>
            <p>means any modification made to the Platform from time to time by Articul8 in its sole discretion. For clarity, the meaning of Update includes Degradation, as defined in Section 2 below.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.17 "Third-Party Software"</p>
            <p>means certain software Articul8 licenses from third parties (if any) and provides to Licensee with the Platform, which may include Open Source Software.</p>
          </div>

          <div className="pl-4 ">
            <p className="font-semibold">1.18 "Trial Period"</p>
            <p>means the period of time, usually thirty (30) days unless otherwise specified (e.g., the Trial Period may be extended in Articul8's discretion), at the beginning of a Subscription, in which a Licensee may access the Platform cost-free. At the end of the Trial Period, the Subscription will continue provided that the responsible Licensee pays all required fees.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-8">2. LICENSE GRANT AND RESTRICTIONS</h2>

      <div className="prose prose-sm max-w-none space-y-6">
        <div className="pl-4 ">
          <p className="font-semibold">2.1 License Grant</p>
          <p>Subject to Licensee's having an active Subscription, subject to all post-Trial-Period fees for maintaining an active Subscription, and also subject to Licensee's compliance with all the subsections of this Section 2 and the other terms and conditions of this EULA, Articul8 grants to Licensee a limited, non-exclusive, non-transferable, non-sublicensable, limited term license to use the Platform in object code form only, solely for Licensee's internal business use, for the term of Licensee's Subscription, unless this EULA is terminated sooner in accordance with the termination provisions below ("License").</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">2.2 Updates</p>
          <p>Licensee acknowledges and agrees that Articul8 shall have the right to prepare and release updates to the Platform as any time and in its sole discretion. In addition, Licensee acknowledges and agrees (i) that Articul8 shall have the right, as part of any Update, to change or remove certain Platform functionality, provided that such changes do not affect the core functionality of the Platform which are the subject of Licensee's Subscription.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">2.3 License Restrictions</p>
          <p>Except to the extent permitted under this Agreement, Licensee will not and will not allow its Authorized Users or any third party to alter, modify, edit, amend, abridge, add to, delete from, adapt, translate or change any of the Platform; make or create any derivative works or copies of copyright, any warranties, or any other proprietary notices or human references to Articul8's ownership of the Platform; copy, reproduce, publish, distribute, or redistribute any of the Platform, in whole or in part, to any person who is not an Authorized User; attempt to sell, resell, lend, lease, license, sublicense, share, or otherwise transfer or attempt to transfer the Platform, in whole or in part, or any rights granted under this EULA; make unauthorized use of your username and/or password; attempt to lend, lease, license, sublicense, transfer, assign, sell, or resell your username(s) and password(s) to any other person or entity; decompile, disassemble, translate or reverse engineer any portion of the Platform; monitor, gather, copy, or distribute any content from the Platform by using any robot, virus, "bot," spider, scraper, crawler, spyware, engine, device, software, extraction tool, or any other automatic device, utility, or manual process of any kind; insert any code or product to manipulate the Platform in any way that affects any other Licensee's or Authorized User's experience; circumvent, disable or otherwise interfere with the security features of the Platform; collect or harvest any personally identifiable information ("PII"), including usernames and passwords of other Licensees and Authorized Users; create multiple Platform accounts by manual or automated means or under false or fraudulent pretenses; create or transmit unwanted electronic communications or "spam" to other Licensees or Authorized Users; transmit any viruses, worms, defects, Trojan horses or other code sequence or routines of a destructive nature; use the Platform to violate the security of any computer network; use any device, software or routine that interferes with the proper working of the Platform; claim the Platform as your property; use any manual process to monitor or copy any content from the Platform; attempt to discover Articul8's Intellectual Property Rights in the Platform; use the Platform after the termination date of your Subscription; fail at any time to accurately state account registration data and information; engage in any activities through or in connection with the Platform that are harmful, offensive, obscene, threatening, harassing, or abusive; use the Platform to upload and store any content that is unlawful, offensive, obscene, or violative of any rights of any third party; use the Platform to "stalk" or otherwise harass another Licensee or Authorized User; impersonate any person or entity, including any Articul8 official; collect or store Personal Data about other users; forge headers or otherwise manipulate identifiers; use the Platform to collect or store any content related to organizations designated as foreign terrorist organizations; use the Platform in any manner not authorized by this Agreement.</p>

          <p className="font-bold mt-4">LICENSEE HEREBY UNDERSTANDS, ACKNOWLEDGES, AND AGREES THAT ANY VIOLATION OR SUSPECTED VIOLATION OF THE FOREGOING LICENSE RESTRICTIONS BY LICENSEE OR ONE OF ITS AUTHORIZED USERS MAY CONSTITUTE GROUNDS ON WHICH ARTICUL8 MAY, IN ITS SOLE DISCRETION, SUSPEND, DEGRADE, OR TERMINATE LICENSEE'S LICENSE TO ACCESS THE PLATFORM, IN ADDITION TO ALL OTHER REMEDIES AVAILABLE TO ARTICUL8 AT LAW OR IN EQUITY.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">2.4 Licensee's Representations and Warranties in regard to Licensee Data</p>
          <p>Licensee understands, acknowledges, and agrees that the License granted herein is subject to all commitments to Licensee's continuous and ongoing compliance with all the representations in this EULA, and to Licensee's undertaking and confirming the following: (i) that Licensee shall be responsible and fully liable for all Licensee Data that Licensee uploads, provides to, stores, caches, and use on the Platform; (ii) that Licensee shall not upload, provide to, store, cache, or use Licensee Data for any illegal, fraudulent, tortious, malicious, obscene, offensive, or improper purpose; (iii) that the Licensee Data shall not be unlawful, harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable; (iv) that Licensee shall not upload, post, provide to, store, cache, or use on the Platform any Licensee Data that Licensee does not have a right to make available under any law or contractual or fiduciary relationships (such as inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under non-disclosure agreements); (v) that the Licensee Data and that any act by Licensee in uploading, storing, caching, and/or using Licensee Data on the Platform shall not infringe any Intellectual Property Rights or other proprietary rights of any other party; (vi) that the Licensee Data shall not contain, advertise, or enable any unsolicited or unauthorized advertising, promotional materials, "junk mail", "spam", "chain letters", "pyramid schemes", or any other form of solicitation; (vii) that the Licensee Data shall not contain any software viruses or any other computer code, files or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware or telecommunications; reports and recommendations; or (viii) that the Licensee Data shall not be used for or directly related to military, defense, aerospace, nuclear, biological or chemical weapons end-uses or in support of law enforcement, national security, military, or foreign policy objectives.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="pl-4 ">
          <p className="font-semibold">(a) Licensee Data and PII</p>
          <p>Licensee acknowledges and agrees that if Licensee discloses PII as part of Licensee Data, Licensee shall use such PII in accordance with Licensee's current Privacy Policy, which at all times shall be compliant with all applicable laws relating to PII (including California's CPRA and the EU's GDPR, if applicable), and any instructions from Articul8 in regard to removal of any disclosed PII. Articul8 believes in its sole discretion that Licensee's use of PII as part of Licensee Data violates any applicable laws, including but not limited to applicable privacy laws. Articul8 recommends that each Licensee should review Articul8's Privacy Policy to understand how Articul8 will use and safeguard both PII and Licensee Data.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">2.5 Responsibility for Use</p>
          <p>The Platform and Documentation may be used only by Licensee and its Authorized Users and in conformance with this EULA. Licensee shall be responsible for the proper use of the Platform and Documentation and is responsible for: (i) managing, supervising, and controlling its Authorized Users' use of the Platform and the Licensee Data on the Platform; (ii) using the Platform in accordance with the Documentation and within the operating environment specified in the Documentation; (iii) establishing adequate operating procedures; and (iv) ensuring the accuracy, quality, integrity, legality, reliability, and appropriateness of all Licensee Data on the Platform and as may be specified by Articul8 from time to time. In addition, Licensee shall: (iv) have sole responsibility for the accuracy, quality, integrity, legality, reliability, and appropriateness of all Licensee Data; (v) use commercially reasonable efforts to prevent unauthorized access to, or use of the Platform by its Authorized Users, and that notify Articul8 promptly of any unauthorized access or use; and (vi) comply with all applicable laws in accessing and using the Platform and undertaking activities in furtherance of this EULA.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">2.6 No Specialized Advice</p>
          <p>Licensee understands, acknowledges, and agrees that the Platform is not intended for specialized service in expert fields, such as and including, but not limited to, medicine, healthcare, finance and financial planning, law, accounting, business planning and administration, or other kinds of professional services. Licensee further understands, acknowledges, and agrees that the Platform is not built, deployed, or intended to replace expert advice provided by a qualified professional, and any use of the Platform does not create a professional consulting relationship of any kind between Licensee and Articul8.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">2.7 Fees</p>
          <p>As further delineated in Section 3 below, after the Trial Period, Licensee's continued access to the Platform under the License is conditioned upon Licensee's timely payment of all Subscription fees agreed to by Licensee.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">2.8 Audit Rights</p>
          <p>Licensee acknowledges and agrees that Articul8 may, at its separate, audit Licensee's use of the Platform, including Licensee Data, to ensure compliance with this EULA, and that if Licensee's Subscription continues past the close of the Trial Period, Articul8 shall maintain the right to audit Licensee Data uploaded during and after the Trial Period. Any such audit shall be conducted by means of remote access to the Platform, and shall be conducted during normal business hours with Licensee's business activities. Licensee acknowledges and agrees that Articul8 shall reserve the right to conduct multiple audits within the same calendar year, as necessary to ensure compliance with this EULA.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">2.9 Open Source Software</p>
          <p>The Platform may include Open Source Software licensed to Articul8 pursuant to one or more Open Source Software licenses (respectively identified with or within the applicable source code files) and/or the header(s) provided with the Platform or otherwise disclosed in the associated Documentation. Licensee shall not subject any proprietary portion of the Platform to any open source license obligations. Nothing in this Agreement limits any rights under, or grants any rights that supersede, the terms of any Open Source Software license applicable to the Articul8 Open Source Software.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">2.10 Third-Party Software</p>
          <p>Use of certain third-party software provided on the Platform or within the Platform requires Licensee to: (i) secure a license directly from the software owner; (ii) comply the software with mandatory technical limits and specifications set forth in the Documentation or on Articul8's website. A listing of any such third-party limitations is included in the Documentation accompanying the Platform. Licensee understands and acknowledges that Articul8 is not providing Licensee with a license to such third-party software, and, further, that it is Licensee's responsibility to obtain necessary licenses from such third-party(ies) directly.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">2.11 No other Licenses, Express, Implied, or Statutorily Recognized</p>
          <p>The License delineated in this EULA is granted to Licensee solely as a limited right dependent upon Licensee's having secured and maintained a valid and current Subscription to the Platform. Any other rights not expressly granted herein, including, but not limited to, rights to use Articul8's Intellectual Property, are expressly excluded from the scope of the limited License granted herein and expressly reserved by Articul8.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">2.12 Articul8's Trademarks</p>
          <p>The License delineated in this EULA does not extend to or provide Licensee with any license, express or implied, to use Articul8's Trademarks. Accordingly, Licensee may not use Articul8's name or logo in any publications, advertisements, or other announcements without Articul8's written consent obtained in advance.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">2.13 United States Government Users</p>
          <p>The Platform licensed under the License delineated in this EULA is commercial computer software. If Licensee is the U.S. Government (i.e., if Licensee is a civilian federal agency of the United States, such agency licenses this commercial computer software and commercial computer software documentation subject to the terms of this EULA as specified in 48 C.F.R. 12.212 (Computer Software) and 48 C.F.R. 12.211 (Technical Data)) or if Licensee is a unit of the U.S. Department of Defense ("DOD"), the U.S. Government licenses this commercial software and/or commercial computer software documentation subject to the terms of this EULA as specified in 48 C.F.R. 227.7202 of the DOD FAR Supplement and its successors.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="pl-4 ">
          <p className="font-semibold">3. SUBSCRIPTIONS</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">3.1 Content Features and Services</p>
          <p>Licensee acknowledges and agrees that Articul8 may change the content, features, and other services from time to time, and that Articul8 does not guarantee that any particular feature, service, or item will always be available on the Platform.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">3.2 Subscription Term and Renewal</p>
          <p>If Licensee purchases a Subscription, Articul8 will automatically renew your Subscription at the end of each periodic renewal date until you cancel. When you purchase has a minimum term (the "Initial Subscription Term"), Articul8 will inform you. At the end of the Initial Subscription Term, your payment method will be charged for the additional terms equal in duration to the Initial Subscription Term and will continue to renew and incur charges for additional terms equal in duration (each such additional term, a "Subscription Renewal Term") until you cancel your Subscription.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">3.3 Subscription Cancellation</p>
          <p>If Licensee purchased a Subscription via our website, you may cancel your Subscription for any reason before your next scheduled renewal—for example, if you sign up for the A8 Essential Platform User Interface ("UI")—or by notifying us at support@articul8.ai. To avoid renewal and charges for the next Subscription Renewal Term, you must cancel your subscription at least 24 hours before the charge on your initial Subscription Term or Subscription Renewal Term. For example, if you purchase a Subscription on January 25th for a Subscription with a one-month Initial Subscription Term, you must cancel the Subscription by January 25th at 12:01am before February 25th to avoid renewal and charges for the next Subscription Renewal Term. In the event of a cancellation, your fees will not be refunded, but your access to the A8 Essential Platform will continue through the end of the Initial Subscription Term or any Subscription Renewal Term for which you previously paid fees.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">3.4 Subscription Fees</p>
          <p>Licensee shall pay the fees to Articul8 for the Initial Subscription Term and each subsequent Subscription Renewal Term up front, at the start of that Initial Subscription Term or Subscription Renewal Term, as applicable. License acknowledges and agrees that Articul8 shall have the ongoing right to make changes to the fees applicable to your Subscription from time to time, although we will not make any changes to the fees applicable to your Subscription during the current Initial Subscription Term or Subscription Renewal Term, as applicable. If these changes result in an increase in fees payable by you, we will inform you at least 30 days in advance of the change. You agree to the increase in fees payable by you unless you cancel the Subscription, as described in Section 3.3 immediately above, before the Subscription Renewal Term in which the increase in fees will apply. The Trial Period shall commence on the date that Licensee signs up for an Articul8 Essential account (the "Trial Start Date") and shall continue for a period of thirty (30) days from the Trial Start Date, unless otherwise determined by Articul8 in its sole discretion. Articul8 reserves the right to extend the Trial Period at its sole discretion, with or without notice to Licensee. Articul8 may interrupt or terminate the Trial Period at any time, with or without notice to Licensee, at its sole discretion. Upon termination of the Trial Period, Licensee's access to the Platform will become inactive, and Licensee will no longer be able to use the Platform, unless Licensee has purchased a Subscription to the Articul8 Essential Service.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="pl-4 ">
          <p className="font-semibold">4. SUPPORT</p>
          <p>Licensee shall be entitled to self-service and interactive Platform support. Self-service support is offered through Articul8's online knowledge-base FAQ. Interactive support can be initiated via Articul8's online web form. Support hours are Monday through Friday, 8AM to 5PM Pacific Time, excluding holidays. Articul8 will use reasonable effort to resolve support requests in a timely manner. Articul8 reserves the right to modify our terms of support for the Platform at any time.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">5. TERM AND TERMINATION</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">5.1 Term</p>
          <p>This EULA shall become operative as soon as Licensee accesses the Platform pursuant to a current and valid Subscription and shall remain in effect until the termination of Licensee's Subscription, unless this EULA is terminated sooner in accordance with the termination provisions delineated below (the "Term").</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">5.2 Termination for Cause</p>
          <p>Articul8 may terminate this EULA immediately upon written notice if Licensee breaches any provision of this EULA and fails to cure such breach within seven (7) days ("Cure Period") after Licensee's receipt of written notice detailing said breach. Licensee acknowledges and agrees that Articul8 shall have the right, in its sole discretion, to suspend Licensee's license during the Cure Period until Licensee cures the breach.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">5.3 Survival</p>
          <p>The Sections of this EULA which, by their nature and meaning, should remain in effect after any termination, shall remain in effect after any termination.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="pl-4 ">
          <p className="font-semibold">6. CONFIDENTIALITY</p>
          <p>Articul8's Confidential Information means any and all information related to Articul8's business that is labeled or identified as "confidential" or "proprietary", or otherwise is of such a type or disclosed in such a way that a reasonable person would understand that the information disclosed is confidential or proprietary. Without limiting the foregoing, Articul8's Confidential Information includes all information related to Articul8's business. The receiving party agrees (i) to hold in confidence and protect Articul8's Confidential Information from dissemination to, and use by, any third party in the same degree of care, but not less than a reasonable degree of care, as the receiving party uses to protect its own Confidential Information of like nature against unauthorized dissemination and use, (ii) to use such Confidential Information in any third party, except as described herein and (iii) not to use such Confidential Information for its own benefit or for the benefit of any third party. With prior written permission of Articul8, Licensee may disclose Articul8's Confidential Information to its responsible employees and contractors with a need to know, but only to the extent necessary to carry out the purposes of this Agreement, and only if such employees and contractors are subject to a nondisclosure agreement sufficient to protect Articul8's Confidential Information hereunder. The parties agree that a breach of this section may cause Articul8 irreparable injury and damage and therefore, the parties agree that in addition to any other remedies available at law or in equity, Articul8 shall be entitled to seek injunctive relief for any threatened or actual unauthorized disclosure.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">7. PLATFORM ANALYTICS</p>
          <p>Licensee acknowledges and agrees that Articul8 may collect, accumulate, and aggregate certain usage statistics and data (including any related data that comes from Platform Development) made by Articul8 ("Analytics") in order to analyze usage of the Platform and make improvements; to develop new aspects of the Platform or new platforms; to prevent and detect any malicious or unlawful use of the Platform; to analyze, evaluate, and enhance customer experiences with the Platform; and to make pricing determinations. Articul8 may use Analytics for any purpose that Articul8, in its own discretion and judgment, may consider appropriate.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">8. OWNERSHIP</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">8.1 Licensee's Ownership</p>
          <p>As between Licensee and Articul8, Licensee retains all right, title, and interest in and to all Licensee Data, all Output Data, all Intellectual Property inherent in all Licensee Data and Output Data, and all Intellectual Property Rights applicable to or invoked by Licensee Data and Output Data. Licensee is a licensee under this EULA, and, accordingly, Licensee acquires no ownership rights of any kind in regard to the Platform, the Documentation, Updates, and any services provided by Articul8.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">8.2 Articul8's Ownership</p>
          <p>All Intellectual Property inherent in the Platform, in the Documentation, in the Updates, in the Platform Developments, and in any services provided by Articul8, and all Intellectual Property Rights invoked by or applicable to any of the foregoing are and shall be owned by Articul8 or by its licensors. All rights in and to the Platform, the Documentation, the Updates, the Platform Developments, and any other Articul8 materials and services furnished or made available hereunder, all Updates and modifications and enhancements thereof, and all suggestions, ideas and feedback proposed by Licensee regarding the Platform and Documentation, including all copyright rights, patent rights and other Intellectual Property Rights in each of the foregoing, belong to and are retained solely by Articul8 or Articul8's licensors or providers, as applicable. Licensee hereby assigns to Articul8 all right, title and interest in and to all ideas, know-how, feedback and suggestions made by Licensee to Articul8 regarding the Platform and Documentation (collectively, "Feedback"). All Intellectual Property Rights in Feedback, and all Intellectual Property Rights associated or applicable to Feedback. Except as expressly provided herein, no other licenses of any kind are granted hereunder, whether by implication, estoppel, or otherwise, and all rights not explicitly licensed herein are reserved to Articul8.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="pl-4 ">
          <p className="font-semibold">9. REPORTING INTELLECTUAL PROPERTY INFRINGEMENT</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">9.1 DMCA Notice for Copyright Infringement</p>
          <p>Articul8 will respond appropriately to notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act ("DMCA"), as set forth below. If you, or another user or our Platform, owns a copyright in a work and believe that the copyright in that work has been infringed by an improper posting of it as part of another customer's data, then you may send us a written notice, which notice must include all of the following:</p>
          
          <p>(a) a subject line that says: "DMCA Copyright Infringement Notice"; and</p>
          
          <p>(b) a description of the copyrighted work that you claim has been infringed or, if multiple copyrighted works are covered by a single notification, a representative list of such works; and</p>
          
          <p>(c) a description of the location of the infringing material on the Website; and</p>
          
          <p>(d) your full name, address, telephone number, and e-mail address; and</p>
          
          <p>(e) a statement by you that you have a good faith belief that use of the allegedly infringing material in the manner complained of is not authorized by the copyright owner; and</p>
          
          <p>(f) a statement by you, made under penalty of perjury, that all the information in your notice is accurate and that you are the copyright owner (or, if you are not the copyright owner, then your statement must indicate that you are authorized to act on the behalf of the owner); and</p>
          
          <p>(g) your physical signature or, if sent through an email (rather than in a physical document or a digital document attached to an email), the characters "/s/" followed by your full name, which will serve as your electronic signature.</p>
          
          <p>Articul8 may elect to not respond to DMCA Notices that do not substantially comply with all of the foregoing requirements, and Articul8 may elect to remove allegedly infringing material that comes to its attention via notices that do not substantially comply with the DMCA.</p>
          <p>Articul8 will only respond to DMCA Notices that it receives by mail or e-mail at the addresses below:</p>
          
          <div className="ml-4 mt-2">
            <p>Articul8 AI attn: Legal Department</p>
            <p>2445 Augustine Dr, Suite 401</p>
            <p>Santa Clara, CA 95054</p>
            <p><a href="mailto:legal@articul8.ai" className="text-blue-600 hover:underline">legal@articul8.ai</a></p>
          </div>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">9.2 DMCA Counter-Notification</p>
          
          <p>(a) We may send the information that you provide in your DMCA Notice to the person who provided the allegedly infringing work. That person may elect to send in a DMCA Counter-Notification. If access to a work that you submitted a DMCA Notice for is disabled or the work is removed as a result of a DMCA Notice, and if the person who provided that work believes that their work was removed or disabled by mistake or misidentification, that person may send us a DMCA Counter-Notification to the addresses above. Your DMCA Counter-Notification should contain the same information required by Section 8.1 (a)-(g) (set the subject line should read "DMCA Counter-Notification.") In addition, your Counter-Notification must contain a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located (or, if your address is located outside the Northern District of California, then you consent to the jurisdiction of the Federal District Court located in the Northern District of California), and that you will accept service of process from the person who provided DMCA notification to us or an agent of such person.</p>

          <p>(b) If we receive a DMCA Counter-Notification, then we may replace the material that we removed (or stop disabling access to it) within 10 to 14 business days following receipt of the DMCA Counter-Notification. However, we will not do this if we first receive notice at the addresses above that the party who sent us the DMCA Copyright Infringement Notice has filed a lawsuit asking a court for an order restraining the person who provided the material from engaging in infringing activity relating to the material on the Platform. You should also be aware that we may forward the Counter-Notification to the party who sent us the DMCA Copyright Infringement Notice.</p>

          <p className="font-semibold">9.3 Repeat Infringers and Takedown Process</p>
          <p>Please note that the DMCA provides that any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability. Without limiting Articul8's other rights, Articul8 may, in appropriate circumstances, terminate a repeat infringer's access to the Platform and any works hosted or created by Articul8.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">10. LIMITED WARRANTY AND DISCLAIMERS</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">10.1 Limited Warranty</p>
          <p>Articul8 warrants (i) that it will provide the Platform in a manner consistent with general industry standards reasonably applicable to providing the Platform; (ii) that the Platform will perform materially in accordance with the Documentation under normal use and reasonable circumstances; and (iii) that Articul8 owns or otherwise has sufficient right in the Platform to grant to Licensee and its Authorized Users the License to use the Platform granted herein. Licensee's exclusive remedy for a breach of this Section 8.1 is that Articul8 shall, at its discretion, use commercially reasonable efforts to correct or replace the Platform, or refund all or a portion of the fees paid by Licensee for the License. Articul8, in its sole discretion, may revise this limited warranty from time to time.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">10.2 Third-Party Software</p>
          <p>Except as expressly set forth in this Agreement, Third-Party Software (including any Open Source Software) is provided on an "as is" basis at the sole risk of Licensee. Notwithstanding any language to the contrary in this Agreement, Articul8 makes no representations or warranties of any kind with respect to Third-Party Software provided to Licensee and shall not be liable for any warranties regarding the use or operation of the Third-Party Software furnished under this Agreement. Any and all express or implied warranties, if any, arising from the license of Third-Party Software shall be those warranties running from the third-party manufacturer or licensor to Licensee.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">10.3 Warranty Disclaimer</p>
          <p>EXCEPT FOR THE LIMITED WARRANTY PROVIDED ABOVE, ARTICUL8 AND ITS SUPPLIERS MAKE NO WARRANTIES OR CONDITIONS OF ANY KIND, WHETHER STATUTORY, EXPRESS, IMPLIED, OR OTHERWISE, RELATING TO THE PLATFORM AND DOCUMENTATION. ARTICUL8 SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES IMPLIED IN THE COURSE OF DEALING, COURSE OF PERFORMANCE, OR TRADE USAGE. ARTICUL8 ALSO SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES IN REGARD TO COMPLETENESS, ACCURACY, RELIABILITY, COMPATIBILITY WITH ANY SPECIFIC FACILITY OR THE PRIVACY OF THE PLATFORM. ARTICUL8 DOES NOT WARRANT OR GUARANTEE THAT THE PLATFORM WILL BE FREE FROM DEFECTS, THAT LICENSEE'S USE WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT THE PLATFORM WILL FULFILL ALL OF LICENSEE'S EXPECTATIONS AND NEEDS. THIS DISCLAIMER SHALL APPLY NOTWITHSTANDING THE FAILURE OF THE ESSENTIAL PURPOSE OF ANY LIMITED REMEDY PROVIDED HEREIN. EXCEPT AS STATED ABOVE, ARTICUL8 PROVIDES THE PLATFORM AND DOCUMENTATION ON AN "AS IS" AND "AS AVAILABLE" BASIS. ARTICUL8 PROVIDES NO WARRANTIES WITH RESPECT TO THIRD PARTY SOFTWARE AND OPEN SOURCE SOFTWARE. LICENSEE ACKNOWLEDGES AND AGREES THAT LICENSEE'S USE OF THE PLATFORM IS SOLELY AT LICENSEE'S OWN RISK.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">10.4 Disclaimer of Licensee Data</p>
          <p>LICENSEE ACKNOWLEDGES AND AGREES THAT ARTICUL8 SHALL HAVE NO RESPONSIBILITY OR LIABILITY FOR OUTPUT DATA LICENSEE GENERATES OR PRODUCES, AND AGREES THAT OUTPUT DATA MAY BE INCOMPLETE OR MAY CONTAIN ERRORS OR INACCURACIES, MAY NOT REFLECT CURRENTLY EXTANT FACTS OR CONDITIONS, THAT LICENSEE SHALL USE OUTPUT DATA ONLY AT ITS OWN RISK, AND THAT LICENSEE IS SOLELY RESPONSIBLE FOR ANY ACTIONS IT TAKES IN REGARD TO THE USE OF OUTPUT DATA.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">11. LIMITATIONS OF LIABILITY AND INDEMNIFICATION</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">11.1 Limitation of Liability</p>
          <p>EXCEPT FOR LICENSEE'S BREACH OF SECTION 2 (LICENSE GRANT AND RESTRICTIONS), SECTION 6 (CONFIDENTIALITY), OR SECTION 8 (OWNERSHIP), IN NO EVENT WILL ARTICUL8 BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, SPECIAL, INCIDENTAL OR PUNITIVE DAMAGES, INCLUDING ANY LOST DATA, LOSS OF USE AND LOST PROFITS, ARISING FROM OR RELATING TO THIS AGREEMENT, THE PLATFORM AND DOCUMENTATION EVEN IF ARTICUL8 KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF, OR COULD REASONABLY HAVE PREVENTED, SUCH DAMAGES.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">11.2 LIMITATION OF DAMAGES</p>
          <p>ARTICUL8'S TOTAL CUMULATIVE LIABILITY ARISING FROM OR RELATING TO THIS EULA, OR THE PLATFORM, AND DOCUMENTATION PROVIDED BY ARTICUL8 WILL NOT EXCEED THE AMOUNT OF FEES PAID OR PAYABLE BY LICENSEE FOR THE LICENSE DURING THE TWELVE (12) MONTH PERIOD IMMEDIATELY PRECEDING THE EFFECTIVE DATE OF LICENSEE'S CAUSE.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">11.3 NO LIABILITY FOR LICENSEE DATA</p>
          <p>LICENSEE ACKNOWLEDGES AND AGREES THAT ARTICUL8 SHALL HAVE NO LIABILITY WHATSOEVER FOR LICENSEE DATA OR FOR ANY MONITORING, STORAGE, CACHING, OR USE OF LICENSEE DATA ON THE PLATFORM BY LICENSEE OR BY ANY THIRD PARTY WHO MAY GAIN ACCESS TO LICENSEE DATA THROUGH OR IN CONNECTION WITH LICENSEE. IN ADDITION LICENSEE AGREES THAT ARTICUL8'S SUPPLIERS AND LICENSORS WILL HAVE NO LIABILITY OF ANY KIND UNDER, OR AS A RESULT OF, THIS AGREEMENT.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">11.4 Licensee's Indemnification Obligation</p>
          <p>Licensee shall indemnify and hold harmless Articul8, its affiliates, suppliers, and licensors, and their respective officers, directors, employees, shareholders, customers, agents, successors and assigns from and against any and all losses, damages, expenses (including reasonable and directly related legal costs) that Articul8 incurs or becomes liable for as a result of any breach by Licensee, by any of its Authorized Users, by its agents or representatives, or others for whom Licensee is responsible, of any of the terms of this EULA, any negligent, reckless or willful act or omission by Licensee or by any of its Authorized Users or by its agents or others for whom Licensee is responsible of the Platform or of the Documentation; or any claim made against Articul8 by any third party for which Articul8 is not responsible under this EULA. Licensee shall reimburse Articul8 for all reasonable expenses incurred by Licensee or by any of its Authorized Users or by its agents or others for whom Licensee is responsible. Licensee shall reimburse Articul8 for all expenses under this Section as they are incurred. Articul8 shall have the right, at its own expense, to participate in the defense of any claim, action or proceeding against which it is indemnified hereunder. Licensee, in the defense of any such claim, action, or proceeding arising under this Section shall not, except with the written consent of Articul8, consent to the entry of any judgment or enter into any settlement that does not include, as an unconditional term, a release granted to Articul8 of all liability in respect of such claim, action or proceeding.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">11.5 THIRD PARTY SOFTWARE</p>
          <p>NOTWITHSTANDING ANY LANGUAGE TO THE CONTRARY IN THIS AGREEMENT, ARTICUL8 SHALL NOT BE LIABLE FOR ANY DAMAGES REGARDING THE USE OR OPERATION OF ANY THIRD-PARTY SOFTWARE FURNISHED UNDER THIS AGREEMENT, NOR ORIGINATING FROM OPEN SOURCE SOFTWARE.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">11.6 LIMITATION OF ACTIONS</p>
          <p>IN NO EVENT MAY LICENSEE BRING ANY CAUSE OF ACTION RELATED TO THIS AGREEMENT MORE THAN ONE (1) YEAR AFTER THE OCCURRENCE OF THE EVENT GIVING RISE TO THE LIABILITY.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">12. EXPORT</p>
          <p>The Platform, Documentation and related technical data may be subject to U.S. export control laws, including without limitation the U.S. Export Administration Act and its associated regulations, and may be subject to export or import regulations in other countries. Licensee agrees to strictly comply with all such laws and regulations and acknowledges that it has the responsibility to obtain such licenses to export, re-export, or import the Platform, Documentation and related technical data.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">13. GENERAL</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">13.1 No Agency</p>
          <p>Articul8 and Licensee each acknowledge and agree that the relationship established by this Agreement is that of independent contractors, and nothing contained in this Agreement shall be construed to: (1) give either party the power to direct or control the day-to-day activities of the other party; (2) deem the parties to be acting as partners, joint venturers, co-owners or otherwise as participants in a joint undertaking; or (3) permit either party or any of either party's officers, directors, employees, agents or representatives to create or assume any obligation on behalf of or for the account of the other party for any purpose whatsoever.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">13.2 Compliance with Laws</p>
          <p>Each party agrees to comply with all applicable laws, regulations, and ordinances relating to their performance hereunder. Without limiting the foregoing, Licensee warrants and represents that it will comply with all laws and regulations of the United States and other jurisdictions relating to export of Licensee's Use of the Software and Documentation including, without limitation, those concerning Intellectual Property Rights, privacy, defamation, and the import and export of Software and Documentation.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">13.3 Force Majeure</p>
          <p>Licensee acknowledges and agrees that Articul8 shall not be liable hereunder by reason of any failure or delay in the performance of its obligations on account of any strikes, riots, fires, flood, storm, explosions, acts of God, acts of terrorism, war, governmental action, earthquakes, or any other cause which is beyond the reasonable control of Articul8.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">13.4 Governing Law; Venue and Jurisdiction; Dispute Resolution</p>
          <p>This EULA shall be interpreted according to the laws of the State of California without regard to or application of choice-of-law rules or principles. The parties expressly agree that the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transactions Act shall not apply to this EULA. Any dispute under this EULA, including any non-payment related allegation of material breach, will be resolved as follows: a party will send notice of the dispute or material breach, including a detailed description of the issues and relevant supporting documents. Management from each party will then try to resolve the dispute. If the parties do not resolve the dispute within 30 Days after the dispute notice, either party may terminate or send notice of a demand for arbitration. In the event any dispute between us arising from or relating to our work cannot be resolved informally, we both agree to resolve it only by final and binding arbitration. Any dispute between us, including but not limited to disputes over fees and adequacy of services, exclusively through private and confidential binding arbitration before the JAMS. The arbitration will be governed by JAMS Comprehensive Arbitration Rules and Procedures, conducted before one neutral arbitrator for any dispute where the claim is less than $50,000 or before three neutral arbitrators for any larger dispute, and the arbitrator or arbitrators will be authorized to award any relief that a court with jurisdiction over the dispute could award. Any arbitration will be conducted in the jurisdiction where the dispute arose and may be enforced in any court with jurisdiction. Licensee acknowledges by executing this EULA that it had had the opportunity to consult with other counsel about the consequences of agreeing to binding arbitration.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">13.5 No Injunctive Relief for Licensee</p>
          <p>Licensee acknowledges and agrees that monetary damages will be an adequate remedy in the event of a breach of this EULA by Articul8. Accordingly, in the event of a breach, Licensee shall not have the right to seek injunctive relief or similar equitable remedies to enforce any rights of Licensee under this EULA.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">13.6 Entire Agreement and Waiver</p>
          <p>This Agreement and any exhibits hereto shall constitute the entire agreement and contains all terms and conditions between Articul8 and Licensee with respect to the subject matter hereof and all prior agreements, representations, and statements with respect to such subject matter are superseded hereby. No failure of Articul8 to exercise or enforce any of its rights under this Agreement shall act as a waiver of subsequent breaches.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">13.7 Severability</p>
          <p>In the event any provision of this Agreement is held by a court or other tribunal of competent jurisdiction to be unenforceable, that provision will be enforced to the maximum extent permissible under applicable law, and the other provisions of this Agreement will remain in full force and effect. The parties further agree that in the event such provision is an essential part of this Agreement, they will begin negotiations for a suitable replacement provision.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">13.8 Binding Effect</p>
          <p>This Agreement shall be binding upon and shall inure to the benefit of the respective parties hereto and their respective successors and permitted assigns.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">13.9 Assignment</p>
          <p>Licensee may not assign this Agreement, in whole or in part, without the advance written permission of Articul8 and any attempt to do so shall be a material default of this Agreement and shall be void. Articul8 may assign its rights and benefits and delegate its duties and obligations under this Agreement freely and at any time.</p>
        </div>

        <div className="pl-4 ">
          <p className="font-semibold">13.10 Updates to this EULA</p>
          <p>Licensee acknowledges and agrees that Articul8 shall have the ongoing unilateral right to modify, amend, update, delete, or supplement (collectively, "EULA Updates") any terms and conditions of this EULA as Articul8 shall deem necessary from time to time in Articul8's sole discretion and judgment. You acknowledge and agree that your continued use of the Platform after any such EULA Update shall constitute your confirmation of your intent to and agreement with the EULA Update. If you do not consent to or agree with any Update, your sole remedy shall be to cease from using the Platform.</p>
        </div>
      </div>
    </div>
  );
} 