import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ---------------- ACCORDION ---------------- */
const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex justify-between items-center bg-muted hover:bg-muted/80"
      >
        <h3 className="text-lg font-semibold text-left">{title}</h3>
        <span className="text-xl font-bold">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="p-6 bg-white space-y-3 text-sm">{children}</div>}
    </div>
  );
};

/* ---------------- PAGE ---------------- */
const Committee = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* HERO */}
        {/* HERO */}
<section className="relative py-28 text-center overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">
  
  {/* Decorative blur */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

  <div className="relative z-10 max-w-4xl mx-auto px-4">
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
      PERSONA FEST 2026
    </h1>

    <div className="mt-6 w-24 h-1 bg-white/80 mx-auto rounded-full" />

    <p className="mt-6 text-lg md:text-xl text-white/90">
      Complete Committee Details
    </p>
  </div>
</section>


        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 space-y-6">

            {/* INSPIRATION */}
            <Accordion title="Inspiration & Blessings">
              <p className="font-medium">Hon’ble Prof. Dr. Vishwanath D. Karad</p>
              <p>Founder – MAEER’S MIT Group of Institutions</p>
              <p>President, MIT-ADT University, Pune</p>
            </Accordion>

            {/* CHIEF PATRONS */}
            <Accordion title="Chief Patrons">
              <ul className="list-disc list-inside">
                <li>Prof. Dr. Mangesh T. Karad – Pro Chancellor & Executive President</li>
                <li>Prof. Jyoti Dhakne – Executive Director</li>
                <li>Prof. Dr. Sunita M. Karad – Executive Director</li>
                <li>Prof. Vinayak Ghaisas – Executive Director</li>
              </ul>
            </Accordion>

            {/* CHAIRMAN */}
            <Accordion title="Chairman">
              <p>Prof. Dr. Rajesh S.</p>
              <p>Vice Chancellor, MIT-ADT University</p>
            </Accordion>

            {/* ORGANIZING COMMITTEE */}
            <Accordion title="Organizing Committee – Executive Members">
              <ul className="list-disc list-inside">
                <li>Prof. Dr. Sayalee Gankar – Provost</li>
                <li>Prof. Dr. Ramchandra Pujeri – Pro Vice Chancellor</li>
                <li>Dr. Mohit Dubey – Pro Vice Chancellor</li>
                <li>Prof. Dr. Nachiket Thakur – Pro Vice Chancellor</li>
                <li>Dr. Mahesh Chopade – Registrar</li>
              </ul>
            </Accordion>

            {/* CONVENERS */}
            <Accordion title="Conveners">
              <ul className="list-disc list-inside">
                <li>Prof. Dr. Sudarshan Sanap</li>
                <li>Prof. Dr. Ganesh Pathak</li>
                <li>Prof. Dr. Renu Vyas</li>
                <li>Prof. Dr. Dandeswar Bisoyi</li>
                <li>Prof. Dr. Sangita Phunde</li>
                <li>Prof. Dr. Suraj Bhoyar</li>
              </ul>
            </Accordion>

            {/* EXECUTIVE COMMITTEE */}
            <Accordion title="Executive Committee Members">
              <p>
                All Deans, Directors, Associate Deans, and Heads of Departments of
                MIT-ADT University
              </p>
            </Accordion>

            {/* ADVISORY */}
            <Accordion title="Advisory Committee">
              <ul className="list-disc list-inside">
                <li>Shri Kishor Raje Nimbalkar, IAS</li>
                <li>Prof. Dr. Jabbar Patel</li>
                <li>Prof. Dr. Mukesh Sharma</li>
                <li>Shri Adinath Mangeshkar</li>
              </ul>
            </Accordion>

            {/* STUDENT ORGANIZING COMMITTEE */}
            <Accordion title="Student Organizing Committee – MIT IMPACT">
              <p className="font-semibold">General Secretaries</p>
              <ul className="list-disc list-inside">
                <li>Sharvil Maind – 7350298972</li>
                <li>Mrinmayi Gotmare – 9136064784</li>
              </ul>

              <p className="font-semibold mt-3">Organizing Secretaries</p>
              <ul className="list-disc list-inside">
                <li>Arya Chaudhary – 8788773606</li>
                <li>Sukhada Tambe – 7722096496</li>
                <li>Swara Kodre – 8669976297</li>
                <li>Bhoumik Rajput – 7970159079</li>
                <li>Adarsh Deshmukh – 9673625626</li>
              </ul>

              <p className="font-semibold mt-3">
                Cultural, Media, Technical, Logistics, Accounts & Digital Marketing
              </p>
              <ul className="list-disc list-inside">
                <li>Khushi Warang – Cultural In-charge – 7887748174</li>
                <li>Yash Gutte – Event Registration – 9689531775</li>
                <li>Ayushi Sharma – Cultural – 7900199890</li>
                <li>Ketan Malviya – Cultural – 8888210841</li>
                <li>Ankan Maity – Cultural – 7066449552</li>
                <li>Shruti Gosavi – Arts Secretary – 8788327094</li>
                <li>Sampada Sonawane – Arts Leader – 9867918972</li>
                <li>Prakriti Chakravarty – Design Head – 9123305259</li>
                <li>Joyeeta Banerjee – Design Leader – 9779776567</li>
                <li>Ira Ghare – Design Leader – 7774084745</li>
                <li>Dev Sagani – Guest Liaison – 8999965114</li>
                <li>Atharv Jadhav – Guest Liaison – 9373076957</li>
                <li>Shrikar Dehadray – Hospitality – 9130846644</li>
                <li>Swapnil Patil – Social Media – 8623090877</li>
                <li>Abhijeet Warudkar – Digital Marketing – 7558320143</li>
                <li><strong>Giriraj Baheti</strong> – Technical Events – 9301728128</li>
                <li>Darsh Buchale – Logistics – 9975832332</li>
                <li>Neil Barapatre – Logistics – 7666738102</li>
              </ul>
            </Accordion>
             {/* INSPIRATION */}
            <Accordion title="Inspiration & Blessings">
              <p className="font-medium">Hon’ble Prof. Dr. Vishwanath D. Karad</p>
              <p>Founder – MAEER’S MIT Group of Institutions</p>
              <p>President, MIT-ADT University, Pune</p>
            </Accordion>

            {/* CHIEF PATRONS */}
            <Accordion title="Chief Patrons">
              <ul className="list-disc list-inside space-y-1">
                <li>Prof. Dr. Mangesh T. Karad – Pro Chancellor & Executive President</li>
                <li>Prof. Jyoti Dhakne – Executive Director</li>
                <li>Prof. Dr. Sunita M. Karad – Executive Director</li>
                <li>Prof. Vinayak Ghaisas – Executive Director</li>
              </ul>
            </Accordion>

            {/* CHAIRMAN */}
            <Accordion title="Chairman">
              <p>Prof. Dr. Rajesh S.</p>
              <p>Vice Chancellor, MIT-ADT University</p>
            </Accordion>

            {/* ORGANIZING COMMITTEE */}
            <Accordion title="Organizing Committee – Executive Members">
              <ul className="list-disc list-inside space-y-1">
                <li>Prof. Dr. Sayalee Gankar – Provost</li>
                <li>Prof. Dr. Ramchandra Pujeri – Pro Vice Chancellor</li>
                <li>Dr. Mohit Dubey – Pro Vice Chancellor</li>
                <li>Prof. Dr. Nachiket Thakur – Pro Vice Chancellor</li>
                <li>Dr. Mahesh Chopade – Registrar</li>
              </ul>
            </Accordion>

            {/* CONVENERS */}
            <Accordion title="Conveners">
              <ul className="list-disc list-inside space-y-1">
                <li>Prof. Dr. Sudarshan Sanap</li>
                <li>Prof. Dr. Ganesh Pathak</li>
                <li>Prof. Dr. Renu Vyas</li>
                <li>Prof. Dr. Dandeswar Bisoyi</li>
                <li>Prof. Dr. Sangita Phunde</li>
                <li>Prof. Dr. Suraj Bhoyar</li>
              </ul>
            </Accordion>

            {/* EXECUTIVE COMMITTEE */}
            <Accordion title="Executive Committee Members">
              <p>
                All Deans, Directors, Associate Deans, and Heads of Departments of
                MIT-ADT University
              </p>
            </Accordion>

            {/* ADVISORY */}
            <Accordion title="Advisory Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Shri Kishor Raje Nimbalkar, IAS</li>
                <li>Prof. Dr. Jabbar Patel</li>
                <li>Prof. Dr. Mukesh Sharma</li>
                <li>Shri Adinath Mangeshkar</li>
              </ul>
            </Accordion>

            {/* CULTURAL EVENT COMMITTEE */}
            <Accordion title="Cultural Event Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Prof. Dr. Dandeswar Bisoyi – Associate Dean – 9899987038 – MIT IOD</li>
                <li>Prof. Tushar Panke – I/C Principal – 8928887905 – MIT SOFA</li>
                <li>Dr. Shreyasi Pavgi – I/C Principal – 9665039164 – MIT VSKA</li>
                <li>Dr. Rekha Sugandhi – Director (IRO) – 9823044694 – MIT SOC</li>
                <li>Dr. Amol Deshmukh – Head, Theatre Dept. – 8380009041 – MIT SFT</li>
                <li>Prof. Chaitanya Garware – Assistant Professor – 9766683680 – MIT SOC</li>
                <li>Prof. Viraj More – Assistant Professor – 9834420522 – MIT IOD</li>
              </ul>
            </Accordion>

            {/* REGISTRATION */}
            <Accordion title="Registration Committee">
              <p>Members to be updated via annexure (as per official circular).</p>
              <p>Duties officially defined.</p>
            </Accordion>

            {/* COMMUNICATION DESIGN */}
            <Accordion title="Communication Design Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Prof. Dr. Rajendra Thakare – Associate Professor – 9881198887 – MIT IOD</li>
                <li>Soniya Nalawade – TY GD – 9420154058 – MIT IOD</li>
                <li>Rutvika Deshmukh – TY GD – 8262952358 – MIT IOD</li>
                <li>Manali Gokhale – TY GD – 9665529128 – MIT IOD</li>
                <li>Rutuja Chaudhari – TY GD – 9699293141 – MIT IOD</li>
              </ul>
            </Accordion>

            {/* INVITATION */}
            <Accordion title="Invitation Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Prof. Dr. Sujit Dharmapatre – Director – 9822844213 – MIT SICS</li>
                <li>Prof. Rahul Thakre – Assistant Professor – 9850004542 – MIT SOES</li>
                <li>Prof. Rajesh Jagtap – Assistant Professor – 9970657852 – MANET</li>
                <li>Prof. Swapnil Bhamare – Assistant Professor – 8857080270 – MIT SOFA</li>
              </ul>
            </Accordion>

            {/* RECEPTION */}
            <Accordion title="Reception & Guest Liaising Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Dr. Atul Patil – Director – 9657703660 – MIT SHD</li>
                <li>Dr. Pratibha Jagtap – Asst. Director – 9579660935 – Student Affairs</li>
                <li>Mr. Jayesh Patil – Instructor – 8668898985 – MIT SHD</li>
                <li>Prof. Nilanjona Mukherjee – Assistant Professor – 9420196350 – MIT SHD</li>
                <li>Mr. Ashish Honrao – Asst. Manager – 9860552200 – Student Affairs</li>
                <li>Mr. Suraj Aiwale – Admin Officer – 8669982308 – MIT SHD</li>
                <li>Mr. Vikram Singh Tomar – Assistant Professor – 9823519966 – MIT SHD</li>
                <li>Prof. Jaya Dubey – Assistant Professor – 9131876813 – MIT SHD</li>
              </ul>
            </Accordion>

            {/* MEDIA */}
            <Accordion title="Media, Social Media & Publicity Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Ms. Pradnya Dalavi – University Manager – 9922759141</li>
                <li>Mr. Vijay Pardeshi – Creative Media Head – 9850244007</li>
                <li>Mrs. Priyanka Deshmukh – Social Media Manager – 9766114691</li>
                <li>Mr. Ajay Shahir – Assistant Manager – 9422501477</li>
                <li>Mr. Prasad Kendre – Marketing Executive – 7020742920</li>
                <li>Mr. Sumit Mohite – Social Media Executive – 8483966885</li>
                <li>Mr. Chandrakant Borude – PRO – 7972512173</li>
              </ul>
            </Accordion>

            {/* STAGE & DIAS */}
            <Accordion title="Stage & Dias Arrangements Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Prof. Dr. Yuvraj Bhirud – Professor & HOD – 9403177059</li>
                <li>Prof. Ajaykumar Ugale – Associate Professor – 9422328949</li>
                <li>Prof. Hrishikesh Mulay – Assistant Professor – 9860254652</li>
                <li>Prof. Sandeep Ohol – Assistant Professor – 8554853745</li>
                <li>Prof. Avinash Rakh – Assistant Professor – 8983481558</li>
                <li>Prof. Vijay Shep – Assistant Professor – 7588389402</li>
                <li>Prof. Amol Kunjir – Assistant Professor – 7517515557</li>
                <li>Prof. Mahesh Kamthe – Assistant Professor – 9975987853</li>
                <li>Mr. Sameer Katkade – Workshop Assistant – 8087881221</li>
                <li>Mr. Arjun Garje – Lab Assistant – 9423521943</li>
                <li>Mr. Suraj Ghule – Lab Assistant – 7020096741</li>
              </ul>
            </Accordion>

            {/* ELECTRICAL */}
            <Accordion title="Electrical, Decor Lights & Power Backup Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Dr. Shankar Gambhire – Associate Professor – 9881549954</li>
                <li>Mr. Mahendra Bhale – Electrical In-charge – 9371123373</li>
                <li>Mr. Pravin More – Asst. Electrical Engineer – 8380009042</li>
                <li>Mr. Sanjay Surve – Electrician – 9850023109</li>
                <li>Mr. Nilesh Jadhav – Electrician – 9604448113</li>
                <li>Mr. Bapu Bhandare – Electrician – 9881616379</li>
                <li>Mr. Mohan Kulkarni – Electrician – 8275886470</li>
                <li>Mr. Abhay Saykar – Electrician – 9011869898</li>
                <li>Mr. Sahebrao Murte – Electrician – 9527928471</li>
                <li>Mr. Imam Sheikh – Electrician – 7757861232</li>
                <li>Mr. Anil Yadav – Electrician – 9881944437</li>
                <li>Mr. Saurabh Dethe – Electrician – 7499296635</li>
                <li>Mr. Madhukar Shendage – Peon – 9325178189</li>
              </ul>
            </Accordion>

            {/* COMPERING */}
            <Accordion title="Compering Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Dr. Swapnil Shirsath – Chief Coordinator – 9545870770</li>
                <li>Prof. Sneha Waghatkar – Coordinator – 9096442421</li>
                <li>Prof. Dr. Ashok Ghuge – Assistant Professor – 9373642638</li>
              </ul>
            </Accordion>

            {/* ACCOMMODATION */}
            <Accordion title="Accommodation Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Dr. Sandeep Thorat – Professor – 9096770276</li>
                <li>Prof. Sujit Sambhaji Phunde – Professor – 9909021611</li>
                <li>Hony. Lt. Manoranjan Parida – Hostel Head – 9149462627</li>
                <li>Mr. Maruti S. Karad – Guest House Asst. – 9545460638</li>
                <li>Mr. Santosh Shinde – Attendant – 9284237169</li>
                <li>Ms. Anshuja Sakat – Hostel Warden – 9767244833</li>
                <li>Mr. Shrihari Lahane – Guest House Asst. – 7397963754</li>
                <li>Mr. Satyawan Magar – Lab Assistant – 9766656089</li>
              </ul>
            </Accordion>

            {/* VENUE BRANDING */}
            <Accordion title="Venue Branding & Display Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Mr. Jayant Yadav – Media Head – 7387915532</li>
                <li>Mr. Sameer Katkade – Workshop Assistant – 8087881221</li>
                <li>Mr. Kiran Naik – HOD Workshop – 9272366402</li>
                <li>Mr. Namdev Janjire – Supervisor – 8600863838</li>
                <li>Mr. Mohan Kande – Senior Clerk – 9822892062</li>
              </ul>
            </Accordion>

            {/* PHOTOGRAPHY */}
            <Accordion title="Photography & Videography Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Mr. Sushant Naiknimbalkar – HOD – 9766555857</li>
                <li>Mr. Vikas Ugale – Photographer – 9604425801</li>
                <li>Mr. Ganesh Waghmare – Video Editor – 8668708607</li>
                <li>Mr. Ashutosh Dandge – Videographer – 9325301517</li>
                <li>Mr. Vandan Jagdhane – Videographer & Editor – 9527142206</li>
                <li>Ms. Saee Jadhav – Photo Editor – 9960643032</li>
                <li>Mr. Vitthal Vitkar – Office Assistant – 8552009449</li>
              </ul>
            </Accordion>

            {/* TECHNICAL SUPPORT */}
            <Accordion title="Technical Support Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Prof. Charudatta Kulkarni – CTO – 9881061758</li>
                <li>Mr. Sunil Hade – Manager, Computer Services – 8308455200</li>
                <li>Mr. Rajesh Mali – CCTV Technician – 9881714774</li>
                <li>Mr. Hemant Kadolkar – Technical Assistant – 9881248101</li>
                <li>Mr. Pratik Gurav – AV Engineer – 9881984603</li>
                <li>Mr. Abhimanyu Lomate – Technical Assistant – 9881943712</li>
                <li>Mr. Akshay Rajguru – Sound Operator – 7756897635</li>
                <li>Mr. Yogesh Raut – IT Support Engineer – 9923865454</li>
                <li>Mr. Avinash Chaudhary – IT Engineer – 9607570147</li>
              </ul>
            </Accordion>

            {/* SECURITY */}
            <Accordion title="Security, Vigilance & Parking Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Mr. Devraj Pawar – Campus Coordinator – 9172726688</li>
                <li>Mr. Tatyasaheb Pawar – Security Supervisor – 9921051475</li>
                <li>Mr. Sanjay Kumbhar – Security Supervisor – 9922064733</li>
                <li>Mr. Prakash Karad (Patil) – Security Supervisor – 7796437620</li>
                <li>Mr. Sachin Chavan – Security Supervisor – 9850792467</li>
              </ul>
            </Accordion>

            {/* INFRASTRUCTURE */}
            <Accordion title="Infrastructure & Campus Maintenance Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Mr. Balasaheb Sawant – Office Superintendent – 9822037529</li>
                <li>Mr. Ashok Lavhare – Maintenance Engineer – 9657121837</li>
                <li>Mr. Ketan Sathe – Asst. Manager – 9689388383</li>
                <li>Mr. Nikhil N. Gholve – Civil Engineer – 8600343688</li>
                <li>Mr. Tanaji Sonawane – Office Assistant – 9850919506</li>
                <li>Mr. Dattatraya Belekar – Admin Officer – 9405016161</li>
                <li>Mr. Mahesh Shintre – Store In-charge – 8379881222</li>
                <li>Mr. Atul Dhoke – HR Executive – 7507275343</li>
              </ul>
            </Accordion>

            {/* STUDENT DISCIPLINE */}
            <Accordion title="Student Management & Discipline Committee">
              <ul className="list-disc list-inside space-y-1">
                <li>Prof. Dr. Ramesh Mali – Professor – 9890032120</li>
                <li>Prof. Dr. Rajesh Jadhav – Associate Professor – 9689934495</li>
                <li>Prof. Moushamee Kuri – Assistant Professor – 9930380903</li>
                <li>Prof. Dr. Siddhart Pandi – Assistant Professor – 8208380668</li>
                <li>Prof. Pratik Joshi – Assistant Professor – 9028762013</li>
                <li>Prof. Dr. Swapnil Vyavahare – Assistant Professor – 9890485568</li>
                <li>Mr. Sandip Alshi – Lab Assistant – 8830723843</li>
                <li>Prof. Arun Tupe – Assistant Professor – 9284919601</li>
                <li>Prof. Shilpa Nagapurkar – Professor – 9890282138</li>
                <li>Prof. Dr. Mayura Bijale – Associate Professor – 9881129279</li>
                <li>Prof. Vikram Singh Tomar – Assistant Professor – 9823519966</li>
                <li>Prof. Dr. Akshay Wayal – Assistant Professor – 8408020830</li>
                <li>Prof. Suraj Kocheta – Assistant Professor – 9975440486</li>
                <li>Prof. Palash Sontakke – Assistant Professor – 8605177100</li>
                <li>Prof. Dr. Vaibhav Patil – Assistant Professor – 8605969200</li>
                <li>Prof. Uttam Janwade – Assistant Professor – 9673832842</li>
                <li>Prof. Anupam Mishra – Assistant Professor – 8218547759</li>
                <li>Prof. Manisha Sanchihar – Associate Professor – 8407945292</li>
                <li>Prof. Dr. Yogita Ranade – Assistant Professor – 9765391418</li>
                <li>Prof. Dr. Balasaheb Wakade – Assistant Professor – 9075367495</li>
                <li>Prof. Dr. Harshad Raisoni – Assistant Professor – 9766302200</li>
                <li>Prof. Praveen Bhojane – Assistant Professor – 9630205044</li>
                <li>Mr. Sunil More & Sports Dept. Staff – 9763398136</li>
                <li>Mr. Devraj Pawar & Team – Campus Coordinator – 9172726688</li>
              </ul>
            </Accordion>

            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Committee;