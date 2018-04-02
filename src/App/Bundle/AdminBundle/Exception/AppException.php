<?php
/**
 * Created by PhpStorm.
 * User: webid
 * Date: 17-8-24
 * Time: 下午4:15
 */

namespace App\Bundle\AdminBundle\Exception;


use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AppException extends HttpException
{
    private $errno = '';

    /**
     * Constructor.
     *
     * @param string $message The internal exception message
     * @param string $errno
     * @param \Exception $previous The previous exception
     * @param int $code The internal exception code
     */
    public function __construct($message = null, $errno = "BUSINESS_ERROR", \Exception $previous = null, $code = 0)
    {
        parent::__construct(200, $message, $previous, array(), $code);
        $this->errno = $errno;
    }

    public function getStatusCode()
    {
        return Response::HTTP_OK;
    }

    public function getErrno()
    {
        return $this->errno;
    }

}