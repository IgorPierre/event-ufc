<?php

namespace App\Enums;

enum EventTypes: string {
    case Lecture = 'lecture';
    case StudentMeeting = 'student_meeting';
    case Course = 'course';
}
