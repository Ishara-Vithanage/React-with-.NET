import React from 'react';
import styles from './styles/Dashboard.module.css'; // Import the CSS file
import logo from '../assets/anandaLogo.png'; // Import the image file
import studentRecords from '../assets/studentRecords.png'; // Import the image file
import teacherRecords from '../assets/teacherRecords.png'; // Import the image file
import employeeRecords from '../assets/employeeRecords.png'; // Import the image file
import Footer from '../component/Footer'; // Import the Footer component

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            {/* Top 25% Background Section */}
            <div className={styles.header}>
                <h1 className={styles.title}>School Administration System</h1>
                <img src={logo} alt="School Logo" className={styles.school_logo} />
            </div>
            
            {/* Remaining 75% Content Section */}
            <div className={styles.content}>
                <div className={styles.button} id="student-records">
                    <img src={studentRecords} alt="Student Records" />
                    <p>Student Records</p>
                </div>
                <div className={styles.button} id="teacher-records">
                    <img src={teacherRecords} alt="Teacher Records" />
                    <p>Teacher Records</p>
                </div>
                <div className={styles.button} id="employee-records">
                    <img src={employeeRecords} alt="Employee Records" />
                    <p>Employee Records</p>
                </div>
            </div>
            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Dashboard;