<?php

namespace App\Enums;

enum EventTypes: string {
    case Lecture = 'lecture';
    case StudentMeeting = 'student_meeting';
    case Course = 'course';

    public static function labels(): array
    {
        return [
            self::Lecture->value => 'Palestra',
            self::StudentMeeting->value => 'Encontro estudantil',
            self::Course->value => 'Minicurso',
        ];
    }
}
