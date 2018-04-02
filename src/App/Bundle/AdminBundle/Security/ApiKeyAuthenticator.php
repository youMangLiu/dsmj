<?php
/**
 * Created by PhpStorm.
 * User: chenmingming
 * Date: 2017/7/10
 * Time: 00:11
 */

namespace App\Bundle\AdminBundle\Security;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\Security\Core\Authentication\Token\PreAuthenticatedToken;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Http\Authentication\SimplePreAuthenticatorInterface;

class ApiKeyAuthenticator implements SimplePreAuthenticatorInterface
{
    /**
     * @inheritdoc
     */
    public function authenticateToken(TokenInterface $token, UserProviderInterface $userProvider, $providerKey)
    {
        if (!$userProvider instanceof ApiKeyUserProvider) {
            throw new \InvalidArgumentException(
                sprintf(
                    'The user provider must be an instance of ApiKeyUserProvider (%s was given).',
                    get_class($userProvider)
                )
            );
        }

        $apiKey   = $token->getCredentials();
        $username = $userProvider->getUsernameForApiKey($apiKey);
        $operator = $userProvider->loadUserByUsername($username);

        return new PreAuthenticatedToken(
            $operator,
            $apiKey,
            $providerKey
        );
    }

    /**
     * @inheritdoc
     */
    public function supportsToken(TokenInterface $token, $providerKey)
    {

        return $token instanceof PreAuthenticatedToken && $token->getProviderKey() === $providerKey;
    }

    /**
     * @inheritdoc
     */
    public function createToken(Request $request, $providerKey)
    {
        $apiKey = $request->headers->get('authorization');
        if (!$apiKey) {
            $apiKey = $request->query->get('token');
        }


        if (!$apiKey || !preg_match('/^[a-zA-Z0-9]+$/', $apiKey)) {
            throw new UnauthorizedHttpException('api-key', 'apiKey not found.');
        }

        return new PreAuthenticatedToken(
            'anon.',
            $apiKey,
            $providerKey
        );
    }

}